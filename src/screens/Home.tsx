import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export function Home() {
    return (
        <View style={style.container}>
            <Text style={style.title}>Lista de Compras</Text>
            <Text style={style.todayDate}>Quarta-feira, 17 de Julho de 2025</Text>

            <View style={style.form}>
                <TextInput
                    style={style.input}
                    placeholder="Nome do Produto"
                    placeholderTextColor="#BDBABA"
                    keyboardType="default"
                />

                <TouchableOpacity style={style.button}>
                    <Text style={style.textButton}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#EAEAEA",
        padding: 24,
    },
    title: {
        color: "#000",
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 28.8,
        marginTop: 48
    },
    todayDate: {
        color: "#000",
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 28.8,
    },
    titleTable:{
        marginTop: 16,
        color: "#000",
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 28.8,
        
    },
    input: {
        flex: 1,
        height: 56,
        padding: 16,
        backgroundColor: "#ffff",
        borderRadius: 5,
        marginRight: 16,

    },
    form: {
        width: "100%",
        flexDirection: "row",
        marginTop: 18,
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: "#31C667",
        borderRadius: 5,

        alignItems: "center",
        justifyContent: "center"
    },
    textButton: {
        color: "#fff",
        fontSize: 24,
    }

})
