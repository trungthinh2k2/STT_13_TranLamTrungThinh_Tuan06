import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import Footer from "../components/Footer";

export default function Screen4_b() {
  const data = [
    {
      id: "1",
      img: require("../assets/giacchuyen 1.png"),
      name_product: "Cáp chuyển từ Cổng USB sang PS2...",
      star: require("../assets/Star.png"),
      star1: require("../assets/Star 5.png"),
      quantity_rate: "(15)",
      price: "69.900đ",
      discount: "-39%",
    },
    {
      id: "2",
      img: require("../assets/daynguon 1.png"),
      name_product: "Cáp chuyển từ Cổng USB sang PS2...",
      star: require("../assets/Star.png"),
      star1: require("../assets/Star 5.png"),
      quantity_rate: "(15)",
      price: "69.900đ",
      discount: "-39%",
    },
    {
      id: "3",
      img: require("../assets/dauchuyendoipsps2 1.png"),
      name_product: "Cáp chuyển từ Cổng USB sang PS2...",
      star: require("../assets/Star.png"),
      star1: require("../assets/Star 5.png"),
      quantity_rate: "(15)",
      price: "69.900đ",
      discount: "-39%",
    },
    {
      id: "4",
      img: require("../assets/dauchuyendoi 1.png"),
      name_product: "Cáp chuyển từ Cổng USB sang PS2...",
      star: require("../assets/Star.png"),
      star1: require("../assets/Star 5.png"),
      quantity_rate: "(15)",
      price: "69.900đ",
      discount: "-39%",
    },
    {
      id: "5",
      img: require("../assets/carbusbtops2 1.png"),
      name_product: "Cáp chuyển từ Cổng USB sang PS2...",
      star: require("../assets/Star.png"),
      star1: require("../assets/Star 5.png"),
      quantity_rate: "(15)",
      price: "69.900đ",
      discount: "-39%",
    },
    {
      id: "6",
      img: require("../assets/daucam 1.png"),
      name_product: "Cáp chuyển từ Cổng USB sang PS2...",
      star: require("../assets/Star.png"),
      star1: require("../assets/Star 5.png"),
      quantity_rate: "(15)",
      price: "69.900đ",
      discount: "-39%",
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image style={styles.img_product} source={item.img} />
        <Text style={styles.name_product}>{item.name_product}</Text>
        <View style={styles.rate}>
          <Image style={styles.img_star} source={item.star} />
          <Image style={styles.img_star} source={item.star} />
          <Image style={styles.img_star} source={item.star} />
          <Image style={styles.img_star} source={item.star} />
          <Image style={styles.img_star} source={item.star1} />
          <Text style={styles.txt_rate}>{item.quantity_rate}</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.discount}>{item.discount}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.btn_header_left}
          onPress={() => navigation.navigate("Home")}
        >
          <Image
            style={styles.img_header}
            source={require("../assets/ant-design_arrow-left-outlined.png")}
          ></Image>
        </TouchableOpacity>
        <View style={styles.input}>
          <Image
            source={require("../assets/whh_magnifier.png")}
            style={{ width: 20, height: 20 }}
          ></Image>
          <TextInput
            underlineColorAndroid="transparent"
            style={styles.txt_input}
            placeholder="Dây cáp USB"
            placeholderTextColor="gray"
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.btn_header_right}>
          <View style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              style={styles.img_header}
              source={require("../assets/bi_cart-check.png")}
            ></Image>
            <View style={styles.circle}></View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 35,
              color: "#fff",
              marginBottom: 20,
              marginRight: 10,
            }}
          >
            ...
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.body}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.body}
          numColumns={2}
        />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    height: 42,
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn_header_left: {
    width: 30,
    height: 30,
    marginLeft: 15,
  },
  img_header: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  btn_header_right: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  circle: {
    position: "absolute",
    top: -4,
    right: -4,
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "red",
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    paddingLeft: 10,
    height: 30,
  },
  txt_input: {
    height: "100%",
    marginLeft: 10,
    paddingLeft: 5,
  },
  body: {
    flex: 1,
    width: "100%",
  },
  item: {
    width: "50%",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  img_product: {
    width: 155,
    height: 90,
    resizeMode: "contain",
  },
  name_product: {
    fontSize: 12,
    width: 111,
    height: 28,
    paddingTop: 6,
  },
  rate: {
    flexDirection: "row",
    marginTop: 12,
    alignItems: "center",
  },
  img_star: {
    width: 13,
    height: 13,
    resizeMode: "contain",
    marginRight: 6,
  },
  price: {
    fontSize: 12,
    fontWeight: 700,
    paddingRight: 18,
  },
  discount: {
    color: "#969DAA",
    fontSize: 12,
    fontWeight: 400,
  },
});
