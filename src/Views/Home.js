import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Image, TextInput, ScrollView } from 'react-native';
import { Container, Content } from 'native-base';
import Icons from 'react-native-vector-icons/Entypo'
let { height, width } = Dimensions.get('window');

class Home extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super()
        this.state = {
            popularData: [
                {
                    img: 'bookmarks',
                    heading: 'BOOKMARKS'
                },
                {
                    img: 'bowl',
                    heading: 'BOWL'
                },
                {
                    img: 'calculator',
                    heading: 'CALCULATOR'
                },
                {
                    img: 'box',
                    heading: 'BOX'
                },
                {
                    img: 'camera',
                    heading: 'CAMERA'
                },
                {
                    img: 'browser',
                    heading: 'BROWSER'
                },
                {
                    img: 'colours',
                    heading: 'COLOURS'
                },
                {
                    img: 'clipboard',
                    heading: 'CLIPBOARD'
                },
                {
                    img: 'clock',
                    heading: 'CLOCK'
                }
            ],
            starCount: 3.5
        }
    }
    render() {
        console.log(this.props,"props")
        let { popularData } = this.state
        return (
            <Container >
                <Content contentContainerStyle={{flex: 1,backgroundColor: '#eee'}}>
                    <View style={{flex: 1}}>
                        <View style={{flex: 1,backgroundColor: '#2585ee',justifyContent: 'center',alignItems: 'center'}}>
                            <View style={{height: 60,width: 60,borderRadius: 30,overflow: 'hidden'}}>
                                <Image source={require('../img/user.jpeg')} style={styles.imageStyle}/>
                            </View>
                            <Text style={{fontSize: 26,color: '#fff'}}>Markus Vans</Text>
                            <Text style={{fontSize: 14,color: '#fff'}}>80 PTS</Text>
                        </View>
                        <View style={{flex: 2,marginTop: -40}}>
                            <ScrollView>
                                <View style={{flexWrap: 'wrap',flexDirection: 'row',justifyContent: 'space-around',alignItems: 'center'}}>
                                    {popularData.map((item,key) => {
                                        return(
                                            <TouchableOpacity style={{width: width/2 - 20, height: width/2 - 40,backgroundColor: '#fff',borderRadius: 5,marginBottom: 20,alignItems: 'center',justifyContent: 'center',elevation: 2}} key={key} activeOpacity={0.9}>
                                                <Icons name={item.img} color ='#bbb' size={35}/>
                                                <Text style={{fontSize: 14,marginTop: 10,color: '#000'}}>{item.heading}</Text>
                                            </TouchableOpacity>
                                        )
                                    })}
                                    
                                </View>
                            </ScrollView>
                        </View>
                    </View>
                </Content>
            </Container>
        )
    }
}
export default Home;

const styles = StyleSheet.create({
    searchBox: {
        paddingLeft: 20,
        paddingRight: 60
    },
    search: {
        position: 'absolute',
        left: 30,
        top: 11,
        zIndex: 10
    },
    textInput: {
        height: 40,
        fontSize: 14,
        color: '#000',
        backgroundColor: '#fff',
        borderRadius: 4,
        paddingLeft: 40,
        borderWidth: 1,
        borderColor: '#eee'
    },
    filterIcon: {
        position: 'absolute',
        right: 20,
        top: 10
    },
    headingView: {
        paddingLeft: 20,
        paddingRight: 20,
        marginTop: 20,
        marginBottom: 20
    },
    heading: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    rightMore: {
        position: 'absolute',
        right: 20,
        top: 10
    },
    rightMoreText: {
        fontSize: 12,
        color: '#bbb'
    },
    mainView: {
        width: 150,
        height: 150,
        borderRadius: 4,
        backgroundColor: '#eee',
        overflow: 'hidden',
        marginRight: 15
    },
    mainCon: {
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        marginBottom: 10
    },
    imageStyle: {
        width: '100%',
        height: '100%'
    },
    texthead: {
        position: 'absolute',
        left: 10,
        bottom: 30,
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textUsdCon: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        left: 10
    },
    textUsd: {
        fontSize: 10,
        color: '#fff'
    },
    activityHead: {
        position: 'absolute',
        right: 10,
        bottom: 25,
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textActivityCon: {
        flexDirection: 'row',
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    mainList: {
        marginLeft: 20,
        marginRight: 20,
        flexDirection: 'row',
        backgroundColor: '#fff',
        marginBottom: 15,
        borderRadius: 5
    },
    imageOuter: {
        width: 80,
        height: 80,
        overflow: 'hidden',
        backgroundColor: '#eee',
        borderRadius: 1,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 4
    },
    rightList: {
        padding: 15,
        paddingTop: 10,
        paddingBottom: 10
    },
    tripFrance: {
        fontSize: 16,
        color: '#000',
        marginBottom: 3
    },
    usdTextActivity: {
        flexDirection: 'row',
        marginBottom: 3
    },
    usdTextAct: {
        fontSize: 10,
        color: '#bbb'
    },
    usdTextActText: {
        marginLeft:10,
        color: '#bbb',
        fontSize: 10,
    }
});
