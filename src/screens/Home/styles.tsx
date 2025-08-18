import{StyleSheet} from "react-native"


export const style = StyleSheet.create({
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
    titleTable: {
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

        marginBottom: 36,
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
    },
    listTitle: {
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 24,
        marginBottom: 16,

    },
    listEmptyText: {
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 19.2,
        flexWrap: "wrap",
        textAlign: "center",
    },
    list: {
        
        flexGrow: 1,
        justifyContent: "center",
    }

})
