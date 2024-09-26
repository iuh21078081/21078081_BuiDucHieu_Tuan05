import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { NavigationProp, useNavigation } from '@react-navigation/native';
function ChooserColorScreen() {
    const [selectedColor, setSelectedColor] = useState<string>("");
    const [color, setColor] = useState<string>("");
    const navigation: NavigationProp<RootStackParamList> = useNavigation();
    const images = {
        'vs_silver.png': require('../assets/vs_silver.png'),
        'vs_red.png': require('../assets/vs_red.png'),
        'vs_black.png': require('../assets/vs_black.png'),
        'vs_blue.png': require('../assets/vs_blue.png'),
    };
    const imageKey = color as keyof typeof images;
    const imgSrc = images[imageKey] || images['vs_blue.png'];
    const handlePickColor = (color: string) => {
        setSelectedColor(color);
        switch (color) {
            case "Bạc":
              setColor("vs_silver.png");
              break;
            case "Đỏ":
              setColor("vs_red.png");
              break;
            case "Đen":
              setColor("vs_black.png");
              break;
            case "Xanh dương":
              setColor("vs_blue.png");
              break;
            default:
              setColor("");
          }
    }
    const handleSubmit = () => {
        navigation.navigate('home', {colorSelected: color});

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ backgroundColor: "#fff", flex: 1, padding: 5, flexDirection: "row", alignItems: 'center' }}>
                <Image source={imgSrc} style={{ width: 150, height: 150, objectFit: "contain" }} />
                <View style={{ marginTop: 10, rowGap: 10 }}>
                    <View>
                        <Text>Điện Thoại Vsmart Joy 3</Text>
                        <Text>Hàng chính hãng</Text>
                    </View>
                    <Text>Màu: {selectedColor} </Text>
                    <View style={{ flexDirection: "row" }}>
                        <Text>Cung cấp bởi</Text>
                        <Text style={{ fontWeight: "bold" }}> Tiki Tradding</Text>
                    </View>
                    <Text style={{ fontSize: 18, fontWeight: "700" }}>1.790.000 đ</Text>
                </View>
            </View>
            <View style={{ flex: 3, padding: 10, marginBottom: -20 }}>
                <Text style={{ fontSize: 18 }}>Chọn một màu bên dưới:</Text>
                <View style={{ alignItems: 'center', rowGap: 20, marginTop: 20 }}>
                    <TouchableOpacity onPress={()=> handlePickColor("Bạc")}>
                        <View style={[styles.colorBox, { backgroundColor: "#e3d8de" }]}></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> handlePickColor("Đỏ")}>
                        <View style={[styles.colorBox, { backgroundColor: "#F30D0D" }]}></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> handlePickColor("Đen")}>
                        <View style={[styles.colorBox, { backgroundColor: "#000000" }]}></View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> handlePickColor("Xanh dương")}>
                        <View style={[styles.colorBox, { backgroundColor: "#234896" }]}></View>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity onPress={handleSubmit}>
                <View style={styles.buttonCustom}>
                    <Text style={{ fontSize: 20, color: "#fff", fontWeight: "700" }}>XONG</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#C4C4C4",
    },
    colorBox: {
        width: 85,
        height: 80,
    },
    buttonCustom: {
        marginTop: -50,
        backgroundColor: "#1952E294",
        borderWidth: 1,
        borderRadius: 10,
        height: 45,
        alignItems: "center",
        justifyContent: "center"
    }
})

export default ChooserColorScreen;