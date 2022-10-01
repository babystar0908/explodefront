import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Grid from "@mui/material/Grid";
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import Coinbase from "./../assets/image/coinbase.png";
import Metamask from "./../assets/image/metamask.png";
import { connectors } from "../walletConnect/connectors";
import { useWeb3React } from "@web3-react/core";
import { toHex, truncateAddress } from "./../walletConnect/utils";
import { networkParams } from "./../walletConnect/networks"

const switchnetworkid = "1"


// window.location.href("",)
// //     <a href='https://metamask.app.link/dapp/wybet.games/mywallet/deposit' id='connectbutton' >
// //     connect
// // </a>
//     hideLoading()
//     let tag = window.document.getElementById("connectbutton")
//     tag.click()
//     return;



const wallet = [
    {
        img: Metamask,
        text: "Metamask"
    }
];

const Modal = (props) => {
    const setProvider = (type) => {
        window.localStorage.setItem("provider", type);
    };
    const {
        activate,
    } = useWeb3React();
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        switch (value) {
            case "Metamask":
                activate(connectors.injected);
                setProvider("injected");
                break;
            default:
                break;
        }
        onClose(value);
    };
    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle>Sellect Wallet</DialogTitle>
            <List sx={{ pt: 0 }}>
                {wallet.map((item, key) => (
                    <ListItem key={key} button onClick={() => handleListItemClick(item.text)}>
                        <ListItemAvatar>
                            <img src={item.img} style={{ width: "30px" }} alt="walletIcon" />
                        </ListItemAvatar>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
        </Dialog>
    )
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.object.isRequired,
};

export default function ModalDemo() {
    const {
        library,
        account,
        activate,
        deactivate,
        active
    } = useWeb3React();
    const [error, setError] = useState("");


    const isMobileDevice = () => {
        return 'ontouchstart' in window || 'onmsgesturechange' in window;
    }
    const switchNetwork = async () => {
        try {
            await library.provider.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: toHex(switchnetworkid) }]
            });
        } catch (switchError) {
            if (switchError.code === 4902) {
                try {
                    await library.provider.request({
                        method: "wallet_addEthereumChain",
                        params: [networkParams[toHex(switchnetworkid)]]
                    });
                } catch (error) {
                    setError(error);
                }
            }
        }
    };
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(wallet[1]);

    const handleClickOpen = () => {
        if (isMobileDevice() && !window.ethereum) {
            let tag = window.document.getElementById("connectbutton")
            tag.click()
            return;
        }
        else {
            if (!active) {
                setOpen(true);
            } else {
                window.localStorage.setItem("provider", "")
                deactivate();
            }
        }
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    const provider = window.localStorage.getItem("provider")
    useEffect(() => {
        if (provider && provider.length) {
            switch (provider) {
                case "coinbaseWallet":
                    activate(connectors.coinbaseWallet);
                    break;

                case "injected":
                    activate(connectors.injected);
                    break;
                default:
                    break;
            }
        }
    }, [provider]);
    useEffect(() => {
        setTimeout(() => {
            if (isMobileDevice() && !window.ethereum) {
                let tag = window.document.getElementById("connectbutton")
                tag.click()
                return;
            }
        }, 1000);
    }, [])

    useEffect(() => {
        switchNetwork()
    }, [active])
    return (
        <Grid>
            <Button color="warning" variant="contained" sx={{ height: "40px", fontWeight: "bold", marginLeft: "10px" }} onClick={handleClickOpen}>
                {active ?
                    truncateAddress(account) :
                    "Connect"
                }
            </Button>

            <Modal
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
            <a href='https://metamask.app.link/dapp/https://ornate-bonbon-3132c6.netlify.app/' id='connectbutton' style={{ display: "none" }} >connect</a>
        </Grid>
    );
}
