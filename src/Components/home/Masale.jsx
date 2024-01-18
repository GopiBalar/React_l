import React from "react";
import MasalaCard from "../common/MasalaCard";

const chip = "c1";
const jet = "j1";

function Masale() {
  const arrMasale = [
    {
      title: "Haldi/Turmeric",
      image:
        "https://www.sattvasugandha.com/wp-content/uploads/2021/03/TURMERIC-Slides-V3_2-1-1.jpg",
      description:
        "Conscious Food Turmeric Powder| Certified Organic | Antioxidant & Anti-Inflammatory | Iron-Pounded | Pure Haldi - 200g. Turmeric,Lemon,Ginger200 g (Pack of ... ",
      price: "587",
    },
    {
      title: "Mirchi/Chilli",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/6/OB/AV/YS/155137308/mirchi-powder.jpg",
      description:
        "Chilli powder is a very hot-tasting powder made mainly from dried chillies. It is used in cooking. Stir while adding the garlic and chilli powder.",
      price: "377",
    },
    {
      title: "Dalchini",
      image:
        "https://skinfoodie.com.ng/wp-content/uploads/2019/11/skinfood-nigeria-cinnamon-powder-skinfood-nigeria.jpg",
      description:
        "Cinnamon Powder 100g (Dalchini Powder) Powder for Weight Loss, Cooking, Natural Immunity Booster, Easy To Use Sprinkle Bottle, Cinnamon Powder Organic.",
      price: "450",
    },
    {
      title: "Namak/Salt",
      image:
        "https://images1.livehindustan.com/uploadimage/library/2022/04/18/16_9/16_9_1/sendha_namak_or_rock_salt_health_benefits_sendha_namak_ke_fayde_1650263115.jpg",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati repellendus soluta atque, deleniti labore molestias.",
      price: "100",
    },
  ];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        padding: "36px",
        gap: "18px",
        overflow: "hidden",
      }}
    >
      {arrMasale.map(function (value, index) {
        return (
          <MasalaCard
            key={index}
            title={value.title}
            imgURL={value.image}
            description={value.description}
            Price={value.price}
          />
        );
      })}
    </div>
  );
}

export default Masale;
export { chip, jet };
