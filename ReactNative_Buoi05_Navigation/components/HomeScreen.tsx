
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { NavigationProp, RouteProp, useNavigation } from '@react-navigation/native';
function HomeScreen({route}: {route: RouteProp<RootStackParamList, 'home'>}) {
    const navigation: NavigationProp<RootStackParamList>  = useNavigation();
    const colorSelected = route.params?.colorSelected;
    const images = {
        'vs_silver.png': require('../assets/vs_silver.png'),
        'vs_red.png': require('../assets/vs_red.png'),
        'vs_black.png': require('../assets/vs_black.png'),
        'vs_blue.png': require('../assets/vs_blue.png'),
      };

    const imageKey = colorSelected as keyof typeof images;
    const imgSrc = images[imageKey] || images['vs_blue.png'];
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 2, alignItems: "center", marginBottom: 20 }}>
                <Image source={imgSrc} style={{ width: "100%", height:"90%", objectFit: "contain" }} />
            </View>
            <View style={styles.body}>
                <Text style={styles.text}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                <View style={[styles.row, { marginTop: 15, alignItems: 'center', gap: 40 }]}>
                    <View style={styles.row}>
                        <AntDesign name="star" size={24} color="yellow" />
                        <AntDesign name="star" size={24} color="yellow" />
                        <AntDesign name="star" size={24} color="yellow" />
                        <AntDesign name="star" size={24} color="yellow" />
                        <AntDesign name="star" size={24} color="yellow" />
                    </View>
                    <Text>(Xem 828 đánh giá)</Text>
                </View>
                <View style={{ marginTop: 15, flexDirection: 'row', gap: 60, alignItems: "center" }}>
                    <Text style={{ fontSize: 18, fontWeight: "700" }}>1.790.000 đ</Text>
                    <Text style={{ textDecorationLine: 'line-through', fontSize: 15, color: "#00000094" }}>1.790.000 đ</Text>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                    <Text style={{ fontSize: 12, fontWeight: "700", color: "#FA0000", marginTop: 15 }}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                    <Feather name="help-circle" size={20} color="black" style={{ textAlign: "center", marginTop: 15 }} />
                </View>
            </View>
            <View style={{ flex: 1, justifyContent:"space-evenly", height: "100%" }}>
                <Pressable onPress={()=> navigation.navigate('pick-color')}>
                    <View style={styles.buttonNavigate}>
                        <Text style={{fontSize: 15, textAlign: 'center' }}>4 MÀU-CHỌN MÀU</Text>
                        <MaterialIcons name="navigate-next" size={24} color="black" style={{position:"absolute", right: 10}} />
                    </View>
                </Pressable>
                <TouchableOpacity>
                    <View style={{ height: 45, width: "100%", backgroundColor: "#EE0A0A", justifyContent: "center", borderRadius: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: "700", color: "#F9F2F2", textAlign: "center" }}>CHỌN MUA</Text>
                    </View>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
    },
    body: {
        flex: 1,
        marginLeft: 10,
        columnGap: 20,
        width: "80%"
    },
    text: {
        fontSize: 15
    },
    row: {
        flexDirection: "row",
    },
    buttonNavigate: {
        marginTop: -60,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        padding: 10,
        alignItems: "center",
        justifyContent: "center",
    }
});

export default HomeScreen;