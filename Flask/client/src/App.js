import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import styles from './components/styles';
import moment from 'moment';
import { sendChat, searchProduct } from './actions/chatActions';
import Drawer from './components/Drawer';

import classNames from 'classnames';
import {
    Grid,
    Chip,
    Typography,
    Avatar,
    Card,
    CardContent,
    CardActionArea,
    GridList,
    GridListTile,
    CardHeader
} from '@material-ui/core';

function prettyName(text) {
    if (text.length > 80) {
        text = text.substring(0, 72);
        return text + '...'
    }
    return text;
}

class App extends Component {
    constructor() {
        super();
        this.state = {
            chats: [
                {
                    pesan: 'bot',
                    ucapan: ['Halo, anda yang bisa saya bantu ? !'],
                    tipe: 'teks-array',
                    waktu: new Date(),
                    products: [

                    ],
                    ner: [],
                    token: [],
                    stopwordRemoval: [],
                    stem: [],
                    intent: [],
                }
            ],

            ucapan: '',
            drawer: false,
            fitur: {
                tokenize: false,
                stemming: false,
                stopword: false,
                ner: false,
                neural: false,
                semua: false
            },
            extra: {
                search: false
            },
            open: true
        }
    }

    handleOnChange = (e) => {
        this.setState({
            ucapan: e.target.value
        })
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.chats.chat !== this.props.chats.chat) {
            let replyBot = nextProps.chats.chat;
            this.setState(prevState => ({
                chats: prevState.chats.concat(replyBot)
            }))

        }
    }
    UNSAFE_componentWillUpdate(nextProps, nextState) {
        if ((nextState.chats.length !== this.state.chats.length)) {
            setTimeout(() => {
                this.scrollToBottom();
            }, 1000);

        }
    }

    toggleDrawer = (val) => (e) => {
        this.setState({
            drawer: val
        });
    }
    handleSubmitChat = (e) => {
        e.preventDefault();
        const { ucapan } = this.state;

        const date = new Date();
        this.setState({
            chats: this.state.chats.concat({
                pesan: 'user', ucapan: ucapan, tipe: 'teks', waktu: date, products: [], ner: []
            }),
            ucapan: ''
        });
        if (this.state.extra.search) {
            this.props.searchProduct({ teks: ucapan });
        } else {

            this.props.sendChat({ teks: ucapan }, this.state.fitur);
        }
    }
    scrollToBottom = () => {

        this.messagesEnd.scroll({
            top: this.messagesEnd.scrollHeight,
            behavior: 'smooth'
        });
        // this.messagesEnd.scrollIntoView({ behavior: "smooth" });
    }
    handleFiturExtra = (val) => (e) => {
        this.setState(prevState => ({
            extra: {
                ...prevState.extra,
                [val]: !this.state.extra[val]
            }
        }));
    }
    handleFitur = (val) => (e) => {
        if (val === 'stemming' && !this.state.fitur.stemming) {
            this.setState(prevState => ({
                fitur: {
                    ...prevState.fitur,
                    stemming: true,
                    tokenize: true
                }
            }));
        }
        if (val === 'tokenize' && this.state.fitur.tokenize) {
            this.setState(prevState => ({
                fitur: {
                    ...prevState.fitur,
                    stemming: false,
                    tokenize: false,
                    stopword: false
                }
            }));
        }
        if (val === 'stopword' && !this.state.fitur.stopword) {
            this.setState(prevState => ({
                fitur: {
                    ...prevState.fitur,
                    tokenize: true,
                    stopword: true
                }
            }));
        }
        else {
            this.setState(prevState => ({
                fitur: {
                    ...prevState.fitur,
                    [val]: !this.state.fitur[val]
                }
            }));
        }

    }
    handleFiturAll = (val) => (e) => {
        if (this.state.fitur[val]) {
            this.setState(prevState => ({
                fitur: {
                    ...prevState.fitur,
                    tokenize: false,
                    stemming: false,
                    stopword: false,
                    ner: false,
                    neural: false,
                    semua: false
                }
            }));
        } else {
            this.setState(prevState => ({
                fitur: {
                    ...prevState.fitur,
                    tokenize: true,
                    stemming: true,
                    stopword: true,
                    ner: true,
                    neural: true,
                    semua: true
                }
            }));
        }
    }

    handleDrawer = () => {
        this.setState({ open: !this.state.open });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };
    render() {
        const { classes } = this.props;
        const { ucapan, chats, open } = this.state;

        return (
            <div>

                <div className={classNames(classes.content, {
                    [classes.contentShift]: open,
                })} style={{ background: 'rgba(232, 232, 232)', height: "90vh", overflow: 'scroll' }} ref={(el) => { this.messagesEnd = el; }}>
                    <Header
                        className={classNames(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}
                        handleDrawer={this.handleDrawer}
                    />
                    <div
                        className={classNames(classes.contentChat, {
                            [classes.contentShiftChat]: open,
                        })}
                        style={{ padding: "80px 50px" }} ref={(el) => { this.divContainer = el; }}>
                        <Grid container direction="column" spacing={16}>
                            {chats.map((c, i) => {
                                return (
                                    <Grid item xs={12} key={i} >
                                        <Grid container style={{ display: "inherit" }} >

                                            {c.pesan === 'bot' && c.tipe === 'teks-array' && (

                                                <Grid item md={12}>
                                                    <Grid container direction="column" spacing={8}>
                                                        {(c.token.length > 0 || c.ner.length > 0 || c.stem.length > 0 || c.stopwordRemoval.length > 0) && (


                                                            <Grid item md={12}>
                                                                <div className={classes.rootWrapperSlide}>
                                                                    <Avatar src='/static/image/bot.png' alt="bot" />

                                                                    {c.token && c.token.length > 0 && (

                                                                        <div className={classes.wrapChatTextBotList}>
                                                                            <Card className={classes.chatBot}
                                                                            >

                                                                                <CardContent>
                                                                                    <Typography className={classes.titleName}>
                                                                                        TOKENIZE
                                    </Typography>
                                                                                    {c.token.map((c, i) => {
                                                                                        return (
                                                                                            <li key={i} className={classes.listTeks}>
                                                                                                {c}
                                                                                            </li>
                                                                                        )
                                                                                    })}

                                                                                </CardContent>

                                                                            </Card>
                                                                        </div>
                                                                    )}
                                                                    {c.stopwordRemoval && c.stopwordRemoval.length > 0 && (

                                                                        <div className={classes.wrapChatTextBotList}>
                                                                            <Card className={classes.chatBot}>

                                                                                <CardContent>
                                                                                    <Typography className={classes.titleName}>
                                                                                        STOPWORD
                                    </Typography>
                                                                                    {c.stopwordRemoval.map((c, i) => {
                                                                                        return (
                                                                                            <li key={i} className={classes.listTeks}>
                                                                                                {c}
                                                                                            </li>
                                                                                        )
                                                                                    })}

                                                                                </CardContent>

                                                                            </Card>
                                                                        </div>

                                                                    )}
                                                                    {c.stem && c.stem.length > 0 && (

                                                                        <div className={classes.wrapChatTextBotList}>
                                                                            <Card className={classes.chatBot}>

                                                                                <CardContent>
                                                                                    <Typography className={classes.titleName}>
                                                                                        STEMMING
                                    </Typography>
                                                                                    {c.stem.map((c, i) => {
                                                                                        return (
                                                                                            <li key={i} className={classes.listTeks}>
                                                                                                {c}
                                                                                            </li>
                                                                                        )
                                                                                    })}

                                                                                </CardContent>

                                                                            </Card>
                                                                        </div>

                                                                    )}
                                                                    {c.ner && c.ner.length > 0 && (

                                                                        <div className={classes.wrapChatTextBotList}>
                                                                            <Card className={classes.chatBot}>

                                                                                <CardContent>
                                                                                    <Typography className={classes.titleName}>
                                                                                        NER
                                    </Typography>
                                                                                    {c.ner.map((c, i) => {
                                                                                        return (
                                                                                            <li key={i} className={classes.listTeks}>
                                                                                                {c.entity} - {c.option}
                                                                                            </li>
                                                                                        )
                                                                                    })}

                                                                                </CardContent>

                                                                            </Card>
                                                                        </div>

                                                                    )}
                                                                    {c.intent && c.intent.length > 0 && (

                                                                        <div className={classes.wrapChatTextBotList}>
                                                                            <Card className={classes.chatBot}>

                                                                                <CardContent>
                                                                                    <Typography className={classes.titleName}>
                                                                                        INTENT
                                    </Typography>
                                                                                    {c.intent.map((c, i) => {
                                                                                        return (
                                                                                            <ul key={i} >
                                                                                                <li className={classes.listTeks}>
                                                                                                    INTENT : {c.intent}
                                                                                                </li>
                                                                                                <li className={classes.listTeks}>
                                                                                                    SCORE :{c.score}
                                                                                                </li>
                                                                                            </ul>

                                                                                        )
                                                                                    })}

                                                                                </CardContent>

                                                                            </Card>
                                                                        </div>

                                                                    )}


                                                                </div>
                                                            </Grid>
                                                        )}
                                                        {c.ucapan.length > 0 && (
                                                            <Grid container direction="column" spacing={8}>
                                                                <div className={classes.rootWrapperSlide} style={{ margin: "10px 0" }}>
                                                                    <Avatar src={'/static/image/bot.png'} alt="bot" />
                                                                    {c.input instanceof Array && c.input.length > 0 && (
                                                                        <div className={classes.wrapChatTextBotList}>
                                                                            <Card className={classes.chatBot}>
                                                                                <CardContent>
                                                                                    <Typography className={classes.titleName}>
                                                                                        INPUT :
                                    </Typography>
                                                                                    {c.input.map((c, i) => {
                                                                                        return (
                                                                                            <li key={i} className={classes.listTeks}>
                                                                                                {c}
                                                                                            </li>
                                                                                        )
                                                                                    })}
                                                                                </CardContent>
                                                                            </Card>

                                                                        </div>
                                                                    )}

                                                                    <div className={classes.wrapChatTextBotList}>
                                                                        <Card className={classes.chatBot}>
                                                                            <CardContent>
                                                                                <Typography className={classes.titleName}>
                                                                                    JAWABAN :
                                    </Typography>
                                                                                <Typography className={classes.textChat}>
                                                                                    {c.ucapan[0]}
                                                                                </Typography>
                                                                            </CardContent>
                                                                        </Card>

                                                                    </div>




                                                                </div>
                                                            </Grid>
                                                        )}


                                                        {c.products instanceof Array && c.products.length > 0 && (
                                                            <div style={{ display: "inherit" }} >

                                                                <Grid item md={12}>
                                                                    <div className={classes.rootProductList}>
                                                                        {c.products.map(p => (
                                                                            <Card >
                                                                                <CardActionArea style={{ padding: 10 }}
                                                                                    onClick={() => window.open(p.productUrl, '_blank')}
                                                                                >
                                                                                    <img src={p.image} style={{ maxWidth: "100%", maxHeight: "200px" }} alt="" />
                                                                                    <div className={classes.productDetail}>
                                                                                        <div style={{ marginBottom: 10 }}>
                                                                                            <Typography className={classes.productTitle}>
                                                                                                {prettyName(p.name)}
                                                                                            </Typography>
                                                                                            {/* <Typography className={classes.productType}>
                                          {p.priceShow}
                                        </Typography> */}

                                                                                        </div>


                                                                                        <div className={classes.productPricing}>

                                                                                            <span className={classNames(classes.regular_price, {
                                                                                                [classes.isDiscount]: (p.discount !== null)
                                                                                            })}>
                                                                                                {p.originalPriceShow}
                                                                                            </span>
                                                                                        </div>
                                                                                        {(p.discount !== null ?
                                                                                            <div >
                                                                                                <Grid container direction="row" justify="space-between">
                                                                                                    <Typography component="p" className={classes.discount_value}>
                                                                                                        {p.priceShow}
                                                                                                    </Typography>
                                                                                                    <Typography component="p" className={classes.discountPercentage}>
                                                                                                        {p.discount}  OFF
                                                </Typography>
                                                                                                </Grid>


                                                                                            </div>
                                                                                            :
                                                                                            <div >
                                                                                                <Typography component="p" className={classes.noDiscount}>
                                                                                                    NO DISCOUNT
                                                </Typography>
                                                                                            </div>
                                                                                        )}

                                                                                    </div>
                                                                                </CardActionArea>
                                                                            </Card>
                                                                        ))}

                                                                    </div>

                                                                </Grid>

                                                            </div>
                                                        )}
                                                    </Grid>


                                                </Grid>
                                            )}


                                            {c.pesan === 'bot' && c.tipe === 'teks-products' && c.products instanceof Array && c.products.length > 0 && (
                                                <div style={{ display: "inherit" }} >

                                                    <Grid item md={12} style={{ padding: "5px 0" }}>
                                                        <div className={classes.wrapChatTextBot}>
                                                            <Avatar src={'/static/image/bot.png'} alt="bot" />
                                                            <Card className={classes.chatBot}>

                                                                <CardContent>
                                                                    <Typography className={classes.textChat}>
                                                                        {c.ucapan}
                                                                    </Typography>
                                                                </CardContent>

                                                            </Card>
                                                        </div>

                                                    </Grid>
                                                    <Grid item md={12}>

                                                        <div className={classes.rootProductList}>
                                                            {c.products.map(p => (
                                                                <Card >
                                                                    <CardActionArea style={{ padding: 10 }}>
                                                                        <img src={p.image} style={{ maxWidth: "100%", maxHeight: "200px" }} alt="" />
                                                                        <div className={classes.productDetail}>
                                                                            <div style={{ marginBottom: 10 }}>
                                                                                <Typography className={classes.productTitle}>
                                                                                    {prettyName(p.name)}
                                                                                </Typography>
                                                                                {/* <Typography className={classes.productType}>
                                          {p.priceShow}
                                        </Typography> */}

                                                                            </div>


                                                                            <div className={classes.productPricing}>

                                                                                <span className={classNames(classes.regular_price, {
                                                                                    [classes.isDiscount]: (p.discount !== null)
                                                                                })}>
                                                                                    {p.originalPriceShow}
                                                                                </span>
                                                                            </div>
                                                                            {(p.discount !== null ?
                                                                                <div >
                                                                                    <Grid container direction="row" justify="space-between">
                                                                                        <Typography component="p" className={classes.discount_value}>
                                                                                            {p.priceShow}
                                                                                        </Typography>
                                                                                        <Typography component="p" className={classes.discountPercentage}>
                                                                                            {p.discount}  OFF
                                                </Typography>
                                                                                    </Grid>


                                                                                </div>
                                                                                :
                                                                                <div >
                                                                                    <Typography component="p" className={classes.noDiscount}>
                                                                                        NO DISCOUNT
                                                </Typography>
                                                                                </div>
                                                                            )}

                                                                        </div>
                                                                    </CardActionArea>
                                                                </Card>
                                                            ))}

                                                        </div>

                                                    </Grid>

                                                </div>
                                            )}


                                            {c.pesan === 'user' && c.tipe === 'teks' && (
                                                <Grid item md={12}>
                                                    <div className={classes.wrapChatTextUser}>
                                                        <Card className={classes.chatUser}>
                                                            <CardContent>
                                                                <Typography className={classes.textChat}>
                                                                    {c.ucapan}
                                                                </Typography>
                                                            </CardContent>

                                                        </Card>
                                                    </div>
                                                </Grid>
                                            )}




                                        </Grid>
                                    </Grid>
                                )
                            })}

                        </Grid>

                    </div>


                    <div style={{ padding: "50px 0px" }} ></div>
                    <Footer
                        ucapan={ucapan}
                        handleOnChange={this.handleOnChange}
                        handleSubmitChat={this.handleSubmitChat}
                        toggleDrawer={this.toggleDrawer}
                        drawer={this.state.drawer}
                        fitur={this.state.fitur}
                        handleFitur={this.handleFitur}
                        handleFiturAll={this.handleFiturAll}
                        className={classNames(classes.appBarFooter, {
                            [classes.appBarShiftFooter]: open,
                        })}
                    />


                </div>
                <Drawer
                    open={open}
                    handleDrawerOpen={this.handleDrawerOpen}
                    handleDrawerClose={this.handleDrawerClose}
                    fitur={this.state.fitur}
                    handleFitur={this.handleFitur}
                    handleFiturAll={this.handleFiturAll}
                    extra={this.state.extra}
                    handleFiturExtra={this.handleFiturExtra}
                />
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    chats: PropTypes.object.isRequired,
    searchProduct: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
    chats: state.chats
})
export default compose(withStyles(styles), connect(mapStateToProps, { sendChat, searchProduct }))(App);
