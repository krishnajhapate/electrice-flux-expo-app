import React, { useLayoutEffect } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import RenderHtml from "react-native-render-html";

export default function BillPreviewScreen({ navigation }) {
    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Bill Preview",
            headerStyle: {
                backgroundColor: "#2E8BC0",
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
                fontWeight: "bold",
            },
            headerRight: () => (
                <TouchableOpacity
                    onPress={() => navigation.push("HomeScreen")}
                    style={{ marginRight: 10 }}
                >
                    <Icon name="user-alt" type="font-awesome-5" color="white" />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    return (
        <View>
            <Text>BillPreviewScreen</Text>
            <RenderHtml
                source={{
                    html: `
<p style='text-align:center;'>
  Hello World!
</p>`,
                }}
            />
        </View>
    );
}
