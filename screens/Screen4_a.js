import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Footer from "../components/Footer";

export default function Screen4_a() {
  const data = [
    {
      id: "1",
      img: require("../assets/ca_nau_lau.png"),
      shop_name: "Devang",
      product_name: "Ca nấu lẩu, nấu mì mini...",
    },
    {
      id: "2",
      img: require("../assets/ga_bo_toi.png"),
      shop_name: "LTD Food",
      product_name: "1KG KHÔ GÀ BƠ TỎI...",
    },
    {
      id: "3",
      img: require("../assets/xa_can_cau.png"),
      shop_name: "Thế giới đồ chơi",
      product_name: "Xe cần cẩu đa năng",
    },
    {
      id: "4",
      img: require("../assets/do_choi_dang_mo_hinh.png"),
      shop_name: "Thế giới đồ chơi",
      product_name: "Đồ chơi dạng mô hình",
    },
    {
      id: "5",
      img: require("../assets/lanh_dao_gian_don.png"),
      shop_name: "Minh Long Book",
      product_name: "Lãnh đạo đơn giản",
    },
    {
      id: "6",
      img: require("../assets/hieu_long_con_tre.png"),
      shop_name: "Minh Long Book",
      product_name: "Hiểu lòng con trẻ",
    },
    {
      id: "7",
      img: require("../assets/trump 1.png"),
      shop_name: "Minh Long Book",
      product_name: "Donal Trum thiên tài lãnh đạo",
    },
  ];

  const handleTouch = (id) => {
    alert("Sản phẩm có id là: " + id);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Image style={styles.imgItem} source={item.img}></Image>
        <View style={styles.txtView}>
          <Text style={styles.item_product_name}>{item.product_name}</Text>
          <Text style={styles.item_shop_name}>
            <Text style={{ color: "#999", paddingRight: 8 }}>Shop</Text>
            {item.shop_name}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.btn_chat}
          onPress={() => {
            handleTouch(item.id);
          }}
        >
          <Text style={styles.btn_chat_text}>Chat</Text>
        </TouchableOpacity>
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
        <Text style={{ fontSize: 20, color: "#fff" }}>Chat</Text>
        <TouchableOpacity style={styles.btn_header_right}>
          <Image
            style={styles.img_header}
            source={require("../assets/bi_cart-check.png")}
          ></Image>
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.text1}>
          <Text style={{ fontSize: 16 }}>
            Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
          </Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.body}
        />
      </ScrollView>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    height: 42,
    backgroundColor: "#1BA9FF",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex: 1,
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
  text1: {
    justifyContent: "center",
    width: "100%",
    paddingHorizontal: 30,
    marginVertical: 10,
    height: 60,
  },
  txtView: {
    marginTop: 5,
    marginLeft: 10,
    width: 200,
  },
  item: {
    height: 80,
    flexDirection: "row",
    borderTopColor: "#ddd",
    borderTopWidth: 1,
    justifyContent: "space-between",
    backgroundColor: "#C4C4C4",
  },
  imgItem: {
    width: 74,
    height: 74,
    resizeMode: "contain",
  },
  item_product_name: {
    lineHeight: 30,
  },
  item_shop_name: {
    color: "#E83030",
  },
  btn_chat: {
    width: 88,
    height: 38,
    backgroundColor: "#F31111",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginRight: 24,
  },
  btn_chat_text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 600,
  },

  body: {
    flexDirection: "column",
    backgroundColor: "#fff",
    width: "100vw",
    height: "100vh",
  },
});
