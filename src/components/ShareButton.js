// *****
//       READ THE
//       ACCOMPANING
//       BLOG POST
//       HERE:
//       https://snappywebdesign.net/blog/how-to-code-a-social-share-button-with-material-ui
//                   *****

import React from "react"
import { FaRegShareSquare } from "react-icons/fa"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import Popper from "@material-ui/core/Popper"
import PopupState, { bindToggle, bindPopper } from "material-ui-popup-state"
import Fade from "@material-ui/core/Fade"
import Paper from "@material-ui/core/Paper"
// import { fade } from "@material-ui/core/styles/colorManipulator"
import { alpha } from '@material-ui/core/styles'
import FacebookIcon from "@material-ui/icons/Facebook"
import TwitterIcon from "@material-ui/icons/Twitter"
import RedditIcon from "@material-ui/icons/Reddit"
import LinkIcon from "@material-ui/icons/Link"
import WhatsappIcon from '@material-ui/icons/WhatsApp'

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  },
  btn: {
    backgroundColor: "blue",
    color: "rgba(255,255,255,0.9)",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: alpha("#26a27b", 0.9085)
    }
  }
}))

export default function ShareButton({ahref, encodedAhref}) {
  const classes = useStyles()

  const handleShare = e => {
    e.preventDefault()

    // const ahref = window.location.href
    // const encodedAhref = encodeURIComponent(ahref)
    var link

    switch (e.currentTarget.id) {
      case "facebook":
        link = `https://www.facebook.com/sharer/sharer.php?u=${ahref}`
        open(link)
        break

      case "twitter":
        link = `https://twitter.com/intent/tweet?url=${encodedAhref}`
        open(link)
        break

      case "reddit":
        link = `https://www.reddit.com/submit?url=${encodedAhref}`
        open(link)
        break

      case 'whatsapp':
        link= `https://api.whatsapp.com/send?&text=${encodedAhref}`
        open(link)
        break

      case "copy":
        navigator.clipboard.writeText(ahref)
        break

      default:
        break
    }
  }

  const open = socialLink => {
    window.open(socialLink, "_blank")
  }

  return (
    <div
      style={{
        height: "15vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <PopupState variant="popper" popupId="demo-popup-popper">
        {popupState => (
          <div>
            <Button
              className={classes.btn}
              color="inherit"
              {...bindToggle(popupState)}
            >
              <FaRegShareSquare
                size={20}
                style={{ marginRight: ".52575em", marginTop: "-.22em" }}
              />
              Share Article
            </Button>
            <Popper {...bindPopper(popupState)} transition>
              {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                  <Paper>
                    <List dense={true} className={classes.paper}>
                      <ListItem
                        button
                        style={{ paddingTop: ".75em" }}
                        id="facebook"
                        onClick={handleShare}
                      >
                        <ListItemIcon>
                          <FacebookIcon />
                        </ListItemIcon>
                        <ListItemText primary="Facebook" />
                      </ListItem>
                      <ListItem
                        button
                        style={{ paddingTop: ".75em" }}
                        id="whatsapp"
                        onClick={handleShare}
                      >
                        <ListItemIcon>
                          <WhatsappIcon />
                        </ListItemIcon>
                        <ListItemText primary="whatsapp" />
                      </ListItem>
                      <ListItem
                        button
                        style={{ paddingTop: ".75em" }}
                        id="twitter"
                        onClick={handleShare}
                      >
                        <ListItemIcon>
                          <TwitterIcon />
                        </ListItemIcon>
                        <ListItemText primary="Twitter" />
                      </ListItem>
                      <ListItem
                        button
                        style={{ paddingTop: ".75em" }}
                        id="reddit"
                        onClick={handleShare}
                      >
                        <ListItemIcon>
                          <RedditIcon />
                        </ListItemIcon>
                        <ListItemText primary="Reddit" />
                      </ListItem>
                      <ListItem
                        button
                        style={{ paddingTop: ".75em" }}
                        id="copy"
                        onClick={handleShare}
                      >
                        <ListItemIcon>
                          <LinkIcon />
                        </ListItemIcon>
                        <ListItemText primary="Copy Link" />
                      </ListItem>
                    </List>
                  </Paper>
                </Fade>
              )}
            </Popper>
          </div>
        )}
      </PopupState>
    </div>
  )
}
