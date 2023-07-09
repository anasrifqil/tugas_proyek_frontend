const dummyData = [
    {
        "id" : 1,
        "image" : "https://i.pinimg.com/736x/de/59/4e/de594ec09881da3fa66d98384a3c72ff.jpg",
        "email" : "MoroSenneng@gmail.com",
        "facebook" : "Moro_Senneng",
        "whatsapps" : "081222333444"

    }
]

export default function handler(req, res) {
    res.status(200).json(dummyData);
}