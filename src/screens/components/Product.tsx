import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

interface Props {
    name: string;
    onRemove: () => void
}

// desestruturacao

// props: Props

// {name, onRemove}:Props
// export function Product(props: Props) {

export function Product({ name, onRemove }: Props) {

    
    
    return (
        <View style={styles.container}>
            <Text style={styles.name}> {name}</Text>

            <TouchableOpacity
                style={styles.buttom}
                onPress={onRemove}>
                <Text style={styles.buttonText}> - </Text>
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        // justifyContent:"space-between"
        borderBottomLeftRadius: 5,
        borderTopLeftRadius: 5,
        marginBottom: 8,

    },
    name: {
        flex: 1,
        fontSize: 16,
        lineHeight: 19.2,
        marginLeft: 16,
        marginRight: 16,
    },

    buttonText: {
        fontSize: 24,
        color: "white",

    },
    buttom: {
        width: 56,
        height: 56,
        backgroundColor: "#E23C44",
        alignItems: "center",
        justifyContent: "center",
        borderBottomRightRadius: 5,
        borderTopRightRadius: 5,

    }
})