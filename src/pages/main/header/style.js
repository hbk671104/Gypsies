export default {
    container : {
        overall : {
            height : 200,
            justifyContent : 'center'
        },
        background : {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        },
        content : {
            alignItems : 'center',
        },
        top : {
            alignItems : 'center'
        },
        bottom : {
            flexDirection : 'row',
            alignItems : 'center',
            marginTop  : 5
        },
        chunk : {
            alignItems : 'center',
            width : 65
        }
    },
    image : {
        avatar : {
            height : 60,
            width : 60,
            borderRadius : 30
        }
    },
    text : {
        title : {
            fontSize : 16,
            color : 'black',
            fontWeight : '500',
            backgroundColor : 'transparent',
            marginTop : 5
        },
        bio : {
            color : 'black',
            fontWeight : '300',
            backgroundColor : 'transparent'
        },
        label : {
            fontSize : 12,
            color : 'gray',
            fontWeight : '300',
            backgroundColor : 'transparent'
        }
    }
}
