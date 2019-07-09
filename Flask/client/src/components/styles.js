const drawerWidth = 350;
export default theme => ({

    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    rootLogo: {
        display:'flex',
        alignItems:'center',
        flexGrow: 1,
    },
    imageBot:{
        backgroundSize:'cover',
        height:'50px',
        width:'50px',
        borderRadius:'100%'     
    },
    textName:{
        padding:'0px 10px',
        fontFamily:`'Anton', sans-serif`
    },
    appBarFooter:{
        top: 'auto',
        bottom: 0,
        padding:10
    },
    boxChat:{
        flexGrow:1,
        borderRadius: 15,
        margin:'0px 5px',
        backgroundColor:'rgba(218, 218, 218)'
    },
    inputBoxChat:{
        width:'100%',
        padding: '5px 10px',
        display: 'flex',
        alignItems: 'center',
    },
    sendIcon:{
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
        color:'#fff'
    },
    fiturIcon:{
        background:`linear-gradient(to right, rgb(96, 108, 136), rgb(63, 76, 107))`,
        color:'#fff',
        margin:'0px 10px'
    },
    wrapChatTextBot:{
        display:'flex',
        alignItems: 'center',
    },
    wrapChatTextUser: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'flex-end'
    },
    chatBot:{
        maxWidth:250,
        borderRadius:20,
        background: '#2196F3',
       
    },
    chatBotProduct:{
        borderRadius: 20,
        background: '#2196F3',  
    },
    chatUser:{
        maxWidth: 250,
        borderRadius: 20,
        background: '#1df1b6',
    },
    textChat:{
        color: '#fff',
        fontFamily: `'Roboto Slab', serif`,
        whiteSpace:"pre-wrap"
    },
    titleName:{
        color: '#fff',
        fontFamily: `'Roboto Slab', serif`,
        borderBottom:'1px solid white',
        padding:"2px 0"
    },
    rootWrapperSlide:{
        display: 'inline-box',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflowX: 'scroll',
        width: "100%",
        padding: "8px 0px",
    },
    wrapChatTextBotList:{
        display: 'flex',
        alignItems: 'center',
        margin:"0px 10px"
    },
    listTeks:{
        color: '#fff',
        fontFamily: `'Roboto Slab', serif`,
        wordWrap: "break-word",      /* IE 5.5-7 */
        whiteSpace:"moz - pre - wrap", /* Firefox 1.0-2.0 */
        whiteSpace:"pre - wrap" 
    },

    rootProductList: {
        display: 'inline-box',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflowX: 'scroll',
        width:"100%",
        borderRadius:15,
        padding:"8px 0px",
        backgroundColor: theme.palette.background.paper,
    },


    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    contentChat:{
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: 0,
        maxWidth: '100%'
    },
    contentShiftChat: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    
    },
    disabledPadding:{
        padding:"0px"
    },
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarFooter: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        top: 'auto',
        bottom: 0,
        padding: 10
    },

    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,

    },
    appBarShiftFooter:{
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
        top: 'auto',
        bottom: 0,
        padding: 10
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        // marginRight: -drawerWidth,
        maxWidth:'100%'
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },




    rootProducts: {
        [theme.breakpoints.up('md')]: {
            paddingTop: 50
        },
        // [theme.breakpoints.down('sm')]:{
        //     padding: 10,
        // }
    },
    containerGridProduct: {
        [theme.breakpoints.up('md')]: {
            marginTop: theme.spacing.unit * 3
        },
        [theme.breakpoints.down('sm')]: {
            margin: 0,
        }

    },
    mobileFilter: {
        margin: "10px 18px 0px 18px"
    },
    wrapperSearchbox: {
        [theme.breakpoints.down('sm')]: {
            marginBottom: "20px",
        }
    },
    appBarMobile: {
        position: "relative"
    },
    AppBarBottomMobile: {
        top: 'auto',
        bottom: 0,
    },
    rootPaper: {
        padding: '2px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
    },

    input: {
        marginLeft: 8,
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        width: 1,
        height: 28,
        margin: 4,
    },
    titleParams: {
        textAlign: 'center',
        fontFamily: "'Staatliches', cursive",
        fontSize: "1.5em"
    },
    productDetail: {
        margin: theme.spacing.unit
    },
    productTitle: {
        fontFamily: "'Staatliches', cursive",
        fontSize: 18,
        maxWidth:"200px"

    },
    productType: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans- serif",
        fontSize: 12
    },
    productPricing: {
        width: '100%'
    },
    regular_price: {
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans- serif",
        fontSize: 15,
        marginRight: 5,
    },
    isDiscount: {
        textDecoration: 'line-through',
        fontSize: 13,
        color: '#484848'
    },
    discount_value: {
        color: '#e53935',
        fontFamily: "'Staatliches', cursive",
        fontSize: 16

    },
    discountPercentage: {
        color: '#e53935',
        fontFamily: "'Staatliches', cursive",
        fontSize: 16
    },
    noDiscount: {
        opacity: 0,
        fontFamily: "'Staatliches', cursive",
        fontSize: 16
    },
    titleBigProduct: {
        textAlign: 'center',
        fontFamily: "'Staatliches', cursive",
        padding: "20px 0 20px 0",
        fontSize: "2.5em"
    },



    root: {
        flexGrow: 1,
        maxWidth: 752
    },
    demo: {
        backgroundColor: theme.palette.background.paper
    },
    title: {
        margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`
    },
    subHeaderList: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    titleSublist: {
        padding: "8px",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans- serif",
        fontWeight: 500,
        textTransform: "Uppercase",
        letterSpacing: "0.02857em",
        lineHeight: 1.5,
        minWidth: "64px",
        color: "rgba(0, 0, 0, 0.87)",
        fontSize: "0.875rem",
        boxSizing: "border-box",
        minHeight: "36px"
    },
    rootListColorFilter: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
    },
    boxColor: {
        width: 15,
        height: 15,
        border: " 2px solid white",
        boxShadow: "0px 0px 0px 1px #9c9b9b87"
    },
    marginLeftRight: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit
    },
    containerBoxColor: {
        display: 'flex',
    },
    titleMenuList: {
        fontFamily: "'Staatliches', cursive",
        fontSize: "1.3em"
    },
    parentMenuList: {
        fontFamily: "'Staatliches', cursive",
        fontSize: "1.2em"
    },
    childMenuList: {
        fontSize: "1rem",
    },
    childchildList: {
        fontSize: "0.9em",
        padding: "0px 10px",
        color: "black"
    },
    childWrapper: {
        padding: "0px 10px"
    },

    listItemButton: {
        padding: "5px 10px"
    },
    nested: {
        padding: "5px 0px",
    },

});