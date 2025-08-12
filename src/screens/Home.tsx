
import { FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Product } from "./components/Product";

export function Home() {

    const products = [
        "Arroz",
        "Feijão",
        "Macarrão",
        "Farinha de Trigo",
        "Açúcar",
        "Sal",
        "Óleo de Soja",
        "Leite",
        "Ovos",
        "Pão",
        "Café",
        "Chá",
        "Manteiga",
        "Queijo",
        "Presunto",
        "Frango",
        "Carne Bovina",
        "Peixe",
        "Frutas",
        "Legumes",
        "Verduras",
        "Batata",
        "Cebola",
        "Alho",
        "Tomate",
        "Cenoura",
        "Banana",
        "Maçã",
        "Laranja",
        "Uva",
        "Refrigerante",
        "Suco",
        "Água Mineral",
        "Biscoitos",
        "Cereais",
        "Molho de Tomate",
        "Condimentos",
        "Iogurte",
        "Sorvete",
        "Chocolate"
    ];

    function handleRemoveProduct() {

    }

    function handleProductRemove(name: string) {
        // console.log("Voce clicou aqui !!" + name)
        console.log(`Voce clicou aqui !! ${name}`)

    }

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

                    <Text style={style.textButton}> + </Text>

                </TouchableOpacity>
            </View>

            <Text style={style.listTitle}>Compras pendentes</Text>

            <View style={style.list}>
                {/* <Text style={style.listEmptyText}>Comprou todos os produtos? Adicione produtos a sua lista de compras</Text> */}

                {/* <ScrollView>
                    {
                        products.map((product) => <Product key={product} name={product} onRemove={() => handleProductRemove(product)} />)
                    }
                </ScrollView> */}

                <FlatList
                    data={products}
                    keyExtractor={item => item}
                    renderItem={({ item }) => <Product name={item} onRemove={() => handleProductRemove(item)} />}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <Text style={style.listEmptyText}>
                            Comprou todos os produtos? Adicione produtos a sua lista de compras
                        </Text>
                    )}
                />

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
        flex: 1,
        // height:500,
        justifyContent: "center",
    }

})
