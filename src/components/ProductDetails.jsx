import React from 'react'
import '../css/ProductList.css'
import axios from 'axios'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default class ProductList extends React.Component {
  state={
    product: {},
    maxSize: 20,
    selectedImage: "",
    mockupData: [
      {
          "main_category": {
              "name": "เสื้อยืด",
              "id": 6365,
              "level": 4,
              "breadcrumbs": [
                  {
                      "category_name": "ผู้หญิง",
                      "category_id": 6112,
                      "category_level": 2
                  },
                  {
                      "category_name": "เสื้อผ้า",
                      "category_id": 6156,
                      "category_level": 3
                  }
              ]
          },
          "main_category_en": {
              "name": "T-Shirts",
              "url_path": "women/clothing/t-shirts",
              "link_url": null,
              "level": 4,
              "id": 6365,
              "breadcrumbs": [
                  {
                      "category_id": 6112,
                      "category_name": "Women",
                      "category_url_key": "women",
                      "category_level": 2,
                      "category_url_path": "women",
                      "category_link_url": null
                  },
                  {
                      "category_id": 6156,
                      "category_name": "Clothing",
                      "category_url_key": "clothing",
                      "category_level": 3,
                      "category_url_path": "women/clothing",
                      "category_link_url": null
                  }
              ]
          },
          "id": 145320,
          "url_key": "ss21s1_sweatshirts_white_f37161781721240-1",
          "name": "SS21S1- เสื้อสเวตเชิ้ต สีขาว ",
          "brand": {
              "name": "STYLENANDA",
              "url": "stylenanda",
              "badge_color": "#ff0000"
          },
          "labels": [
              {
                  "disabled": null,
                  "category_img": "https://media-kiwis.monline.com/media/amasty/amlabel/1FlashSale0.25x.png",
                  "category_position": "0",
                  "product_img": "https://media-kiwis.monline.com/media/amasty/amlabel/FlashSale0.25x.png",
                  "product_position": "0",
                  "is_single": 1,
                  "priority": 0
              }
          ],
          "productbrands": "5813",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/4/8/48-1.jpg",
              "label": "SS21S1- เสื้อสเวตเชิ้ต สีขาว "
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/4/8/48-1.jpg"
          },
          "second_image": {
              "url": "",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 1475,
                      "percent_off": 50
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 1475
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 2950
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 1475,
                      "percent_off": 50
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 2950
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 2950
                  }
              }
          }
      },
      {
          "main_category": {
              "name": "กางเกงยีนส์",
              "id": 6371,
              "level": 4,
              "breadcrumbs": [
                  {
                      "category_name": "ผู้หญิง",
                      "category_id": 6112,
                      "category_level": 2
                  },
                  {
                      "category_name": "เสื้อผ้า",
                      "category_id": 6156,
                      "category_level": 3
                  }
              ]
          },
          "main_category_en": {
              "name": "Jeans",
              "url_path": "women/clothing/jeans",
              "link_url": null,
              "level": 4,
              "id": 6371,
              "breadcrumbs": [
                  {
                      "category_id": 6112,
                      "category_name": "Women",
                      "category_url_key": "women",
                      "category_level": 2,
                      "category_url_path": "women",
                      "category_link_url": null
                  },
                  {
                      "category_id": 6156,
                      "category_name": "Clothing",
                      "category_url_key": "clothing",
                      "category_level": 3,
                      "category_url_path": "women/clothing",
                      "category_link_url": null
                  }
              ]
          },
          "id": 175035,
          "url_key": "std_100603_ss21s2_denim_pants_black_s15162248284421-1",
          "name": "SS21S2 - กางเกงยีนส์ สีดำ ",
          "brand": {
              "name": "STYLENANDA",
              "url": "stylenanda",
              "badge_color": "#ff0000"
          },
          "labels": [
              {
                  "disabled": null,
                  "category_img": "https://media-kiwis.monline.com/media/amasty/amlabel/1FlashSale0.25x.png",
                  "category_position": "0",
                  "product_img": "https://media-kiwis.monline.com/media/amasty/amlabel/FlashSale0.25x.png",
                  "product_position": "0",
                  "is_single": 1,
                  "priority": 0
              }
          ],
          "productbrands": "5813",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/1/0/10-1_2_9.jpg",
              "label": "SS21S2 - กางเกงยีนส์ สีดำ "
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/1/0/10-1_2_9.jpg"
          },
          "second_image": {
              "url": "",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 1775,
                      "percent_off": 50
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 1775
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 3550
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 1775,
                      "percent_off": 50
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 3550
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 3550
                  }
              }
          }
      },
      {
          "main_category": {
              "name": "กางเกงยีนส์",
              "id": 6371,
              "level": 4,
              "breadcrumbs": [
                  {
                      "category_name": "ผู้หญิง",
                      "category_id": 6112,
                      "category_level": 2
                  },
                  {
                      "category_name": "เสื้อผ้า",
                      "category_id": 6156,
                      "category_level": 3
                  }
              ]
          },
          "main_category_en": {
              "name": "Jeans",
              "url_path": "women/clothing/jeans",
              "link_url": null,
              "level": 4,
              "id": 6371,
              "breadcrumbs": [
                  {
                      "category_id": 6112,
                      "category_name": "Women",
                      "category_url_key": "women",
                      "category_level": 2,
                      "category_url_path": "women",
                      "category_link_url": null
                  },
                  {
                      "category_id": 6156,
                      "category_name": "Clothing",
                      "category_url_key": "clothing",
                      "category_level": 3,
                      "category_url_path": "women/clothing",
                      "category_link_url": null
                  }
              ]
          },
          "id": 175020,
          "url_key": "std_400501_ss21s2_denim_pants_l_blue_s11162248284426-1",
          "name": "SS21S2 - กางเกงยีนส์ สีฟ้า",
          "brand": {
              "name": "STYLENANDA",
              "url": "stylenanda",
              "badge_color": "#ff0000"
          },
          "labels": [
              {
                  "disabled": null,
                  "category_img": "https://media-kiwis.monline.com/media/amasty/amlabel/1FlashSale0.25x.png",
                  "category_position": "0",
                  "product_img": "https://media-kiwis.monline.com/media/amasty/amlabel/FlashSale0.25x.png",
                  "product_position": "0",
                  "is_single": 1,
                  "priority": 0
              }
          ],
          "productbrands": "5813",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/8/-/8-1_2_8.jpg",
              "label": "SS21S2 - กางเกงยีนส์ สีฟ้า"
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/8/-/8-1_2_8.jpg"
          },
          "second_image": {
              "url": "",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 1975,
                      "percent_off": 50
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 1975
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 3950
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 1975,
                      "percent_off": 50
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 3950
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 3950
                  }
              }
          }
      },
      {
          "main_category": {
              "name": null,
              "id": null,
              "level": null,
              "breadcrumbs": null
          },
          "main_category_en": {
              "name": null,
              "url_path": null,
              "link_url": null,
              "level": null,
              "id": null,
              "breadcrumbs": null
          },
          "id": 274390,
          "url_key": "trousers_pleats_0598684_br_f6166482063537_1669704905122",
          "name": "กางเกงขายาวอัดพลีท 0598684 สีน้ำตาล ",
          "brand": {
              "name": "F-FASHION",
              "url": "f-fashion",
              "badge_color": "#ff0000"
          },
          "labels": [
              {
                  "disabled": null,
                  "category_img": "https://media-kiwis.monline.com/media/amasty/amlabel/1FlashSale0.25x.png",
                  "category_position": "0",
                  "product_img": "https://media-kiwis.monline.com/media/amasty/amlabel/FlashSale0.25x.png",
                  "product_position": "0",
                  "is_single": 1,
                  "priority": 0
              }
          ],
          "productbrands": "2060",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-c85de694-00c1-452f-899c-553d708281ca_1.jpg",
              "label": "กางเกงขายาวอัดพลีท 0598684 สีน้ำตาล "
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-c85de694-00c1-452f-899c-553d708281ca_1.jpg"
          },
          "second_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-eded7a3c-ae6b-4f0a-aa1f-304d07bfec0a_1.jpg",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 318,
                      "percent_off": 20
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 1272
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 1590
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 318,
                      "percent_off": 20
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 1590
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 1590
                  }
              }
          }
      },
      {
          "main_category": {
              "name": null,
              "id": null,
              "level": null,
              "breadcrumbs": null
          },
          "main_category_en": {
              "name": null,
              "url_path": null,
              "link_url": null,
              "level": null,
              "id": null,
              "breadcrumbs": null
          },
          "id": 274405,
          "url_key": "knit_top_short_sleeve_0600820_pi_xs4166758371325_1669715347345",
          "name": "เสื้อยืดแขนสั้น 0600820 สีชมพู ",
          "brand": {
              "name": "F-FASHION",
              "url": "f-fashion",
              "badge_color": "#ff0000"
          },
          "labels": [
              {
                  "disabled": null,
                  "category_img": "https://media-kiwis.monline.com/media/amasty/amlabel/1FlashSale0.25x.png",
                  "category_position": "0",
                  "product_img": "https://media-kiwis.monline.com/media/amasty/amlabel/FlashSale0.25x.png",
                  "product_position": "0",
                  "is_single": 1,
                  "priority": 0
              }
          ],
          "productbrands": "2060",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-66adbeae-eff2-499c-b78a-2c8ad19647f5_1.jpg",
              "label": "เสื้อยืดแขนสั้น 0600820 สีชมพู "
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-66adbeae-eff2-499c-b78a-2c8ad19647f5_1.jpg"
          },
          "second_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-484a3a49-dfeb-4100-8029-dfe1f401e0cf_1.jpg",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 158,
                      "percent_off": 20
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 632
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 790
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 158,
                      "percent_off": 20
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 790
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 790
                  }
              }
          }
      },
      {
          "main_category": {
              "name": null,
              "id": null,
              "level": null,
              "breadcrumbs": null
          },
          "main_category_en": {
              "name": null,
              "url_path": null,
              "link_url": null,
              "level": null,
              "id": null,
              "breadcrumbs": null
          },
          "id": 274409,
          "url_key": "sweater_three_quarter_sleeve_0601210_wh_xs9166758384222_1669715358074",
          "name": "เสื้อสเวตเตอร์แขนสามส่วน 0601210 สีขาว ",
          "brand": {
              "name": "F-FASHION",
              "url": "f-fashion",
              "badge_color": "#ff0000"
          },
          "labels": [
              {
                  "disabled": null,
                  "category_img": "https://media-kiwis.monline.com/media/amasty/amlabel/1FlashSale0.25x.png",
                  "category_position": "0",
                  "product_img": "https://media-kiwis.monline.com/media/amasty/amlabel/FlashSale0.25x.png",
                  "product_position": "0",
                  "is_single": 1,
                  "priority": 0
              }
          ],
          "productbrands": "2060",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-a10febe4-5bfa-40ef-aa28-d0f4424d9eec_1.jpg",
              "label": "เสื้อสเวตเตอร์แขนสามส่วน 0601210 สีขาว "
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-a10febe4-5bfa-40ef-aa28-d0f4424d9eec_1.jpg"
          },
          "second_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-e1517d0d-06d0-44c8-a39a-3ccb4465a8c1_1.jpg",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 218,
                      "percent_off": 20
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 872
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 1090
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 218,
                      "percent_off": 20
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 1090
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 1090
                  }
              }
          }
      },
      {
          "main_category": {
              "name": null,
              "id": null,
              "level": null,
              "breadcrumbs": null
          },
          "main_category_en": {
              "name": null,
              "url_path": null,
              "link_url": null,
              "level": null,
              "id": null,
              "breadcrumbs": null
          },
          "id": 274389,
          "url_key": "blouses_pleats_0597284_br_f5166482063526_1669704904041",
          "name": "เสื้อเบลาส์อัดพลีท 0597284 สีน้ำตาล ",
          "brand": {
              "name": "F-FASHION",
              "url": "f-fashion",
              "badge_color": "#ff0000"
          },
          "labels": [
              {
                  "disabled": null,
                  "category_img": "https://media-kiwis.monline.com/media/amasty/amlabel/1FlashSale0.25x.png",
                  "category_position": "0",
                  "product_img": "https://media-kiwis.monline.com/media/amasty/amlabel/FlashSale0.25x.png",
                  "product_position": "0",
                  "is_single": 1,
                  "priority": 0
              }
          ],
          "productbrands": "2060",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-65574aa3-3236-4e1c-b209-fe9e261570ad_1.jpg",
              "label": "เสื้อเบลาส์อัดพลีท 0597284 สีน้ำตาล "
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-65574aa3-3236-4e1c-b209-fe9e261570ad_1.jpg"
          },
          "second_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-25f18c3c-4c9d-4248-952b-213b38d35525_1.jpg",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 278,
                      "percent_off": 20
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 1112
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 1390
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 278,
                      "percent_off": 20
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 1390
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 1390
                  }
              }
          }
      },
      {
          "main_category": {
              "name": "เสื้อเบลาส์",
              "id": 6364,
              "level": 4,
              "breadcrumbs": [
                  {
                      "category_name": "ผู้หญิง",
                      "category_id": 6112,
                      "category_level": 2
                  },
                  {
                      "category_name": "เสื้อผ้า",
                      "category_id": 6156,
                      "category_level": 3
                  }
              ]
          },
          "main_category_en": {
              "name": "Blouses & Tops",
              "url_path": "women/clothing/blousestops",
              "link_url": null,
              "level": 4,
              "id": 6364,
              "breadcrumbs": [
                  {
                      "category_id": 6112,
                      "category_name": "Women",
                      "category_url_key": "women",
                      "category_level": 2,
                      "category_url_path": "women",
                      "category_link_url": null
                  },
                  {
                      "category_id": 6156,
                      "category_name": "Clothing",
                      "category_url_key": "clothing",
                      "category_level": 3,
                      "category_url_path": "women/clothing",
                      "category_link_url": null
                  }
              ]
          },
          "id": 216617,
          "url_key": "nouveau_crop_brown30164010840631-1",
          "name": "เสื้อครอปแขนยาวอาร์ตนูโว สีน้ำตาล",
          "brand": {
              "name": "Rälly",
              "url": "rally",
              "badge_color": "#ff0000"
          },
          "labels": [],
          "productbrands": "15202",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/0/0/000002_1.jpg",
              "label": "เสื้อครอปแขนยาวอาร์ตนูโว สีน้ำตาล"
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/0/0/000002_1.jpg"
          },
          "second_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/0/0/000010_1.jpg",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 0,
                      "percent_off": 0
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 1490
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 1490
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 0,
                      "percent_off": 0
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 1490
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 1490
                  }
              }
          }
      },
      {
          "main_category": {
              "name": "เสื้อเชิ๊ต ",
              "id": 6366,
              "level": 4,
              "breadcrumbs": [
                  {
                      "category_name": "ผู้หญิง",
                      "category_id": 6112,
                      "category_level": 2
                  },
                  {
                      "category_name": "เสื้อผ้า",
                      "category_id": 6156,
                      "category_level": 3
                  }
              ]
          },
          "main_category_en": {
              "name": "Shirts",
              "url_path": "women/clothing/shirts",
              "link_url": null,
              "level": 4,
              "id": 6366,
              "breadcrumbs": [
                  {
                      "category_id": 6112,
                      "category_name": "Women",
                      "category_url_key": "women",
                      "category_level": 2,
                      "category_url_path": "women",
                      "category_link_url": null
                  },
                  {
                      "category_id": 6156,
                      "category_name": "Clothing",
                      "category_url_key": "clothing",
                      "category_level": 3,
                      "category_url_path": "women/clothing",
                      "category_link_url": null
                  }
              ]
          },
          "id": 173400,
          "url_key": "hard_edge_crop_top_checkboard39162447006637-1",
          "name": "เสื้อครอปลายตาราง ",
          "brand": {
              "name": "Rälly",
              "url": "rally",
              "badge_color": "#ff0000"
          },
          "labels": [],
          "productbrands": "15202",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/r/m/rm_32_1_.jpg",
              "label": "เสื้อครอปลายตาราง "
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/r/m/rm_32_1_.jpg"
          },
          "second_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/r/m/rm-75_13.jpg",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 0,
                      "percent_off": 0
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 1390
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 1390
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 0,
                      "percent_off": 0
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 1390
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 1390
                  }
              }
          }
      },
      {
          "main_category": {
              "name": "เสื้อยืด",
              "id": 6365,
              "level": 4,
              "breadcrumbs": [
                  {
                      "category_name": "ผู้หญิง",
                      "category_id": 6112,
                      "category_level": 2
                  },
                  {
                      "category_name": "เสื้อผ้า",
                      "category_id": 6156,
                      "category_level": 3
                  }
              ]
          },
          "main_category_en": {
              "name": "T-Shirts",
              "url_path": "women/clothing/t-shirts",
              "link_url": null,
              "level": 4,
              "id": 6365,
              "breadcrumbs": [
                  {
                      "category_id": 6112,
                      "category_name": "Women",
                      "category_url_key": "women",
                      "category_level": 2,
                      "category_url_path": "women",
                      "category_link_url": null
                  },
                  {
                      "category_id": 6156,
                      "category_name": "Clothing",
                      "category_url_key": "clothing",
                      "category_level": 3,
                      "category_url_path": "women/clothing",
                      "category_link_url": null
                  }
              ]
          },
          "id": 145318,
          "url_key": "ss21s1_no_sleeve_t_red_f35161781721240-1",
          "name": "SS21S1- เสื้อยืดแขนกุด สีแดง ",
          "brand": {
              "name": "STYLENANDA",
              "url": "stylenanda",
              "badge_color": "#ff0000"
          },
          "labels": [
              {
                  "disabled": null,
                  "category_img": "https://media-kiwis.monline.com/media/amasty/amlabel/1FlashSale0.25x.png",
                  "category_position": "0",
                  "product_img": "https://media-kiwis.monline.com/media/amasty/amlabel/FlashSale0.25x.png",
                  "product_position": "0",
                  "is_single": 1,
                  "priority": 0
              }
          ],
          "productbrands": "5813",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/4/6/46-1.jpg",
              "label": "SS21S1- เสื้อยืดแขนกุด สีแดง "
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/4/6/46-1.jpg"
          },
          "second_image": {
              "url": "",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 625,
                      "percent_off": 50
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 625
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 1250
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 625,
                      "percent_off": 50
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 1250
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 1250
                  }
              }
          }
      },
      {
          "main_category": {
              "name": "เสื้อยืด",
              "id": 6365,
              "level": 4,
              "breadcrumbs": [
                  {
                      "category_name": "ผู้หญิง",
                      "category_id": 6112,
                      "category_level": 2
                  },
                  {
                      "category_name": "เสื้อผ้า",
                      "category_id": 6156,
                      "category_level": 3
                  }
              ]
          },
          "main_category_en": {
              "name": "T-Shirts",
              "url_path": "women/clothing/t-shirts",
              "link_url": null,
              "level": 4,
              "id": 6365,
              "breadcrumbs": [
                  {
                      "category_id": 6112,
                      "category_name": "Women",
                      "category_url_key": "women",
                      "category_level": 2,
                      "category_url_path": "women",
                      "category_link_url": null
                  },
                  {
                      "category_id": 6156,
                      "category_name": "Clothing",
                      "category_url_key": "clothing",
                      "category_level": 3,
                      "category_url_path": "women/clothing",
                      "category_link_url": null
                  }
              ]
          },
          "id": 145301,
          "url_key": "ss21s1_long_sleeve_t_m_grey_f26161781721224-1",
          "name": "SS21S1- เสื้อยืดแขนยาว สีเทา ",
          "brand": {
              "name": "STYLENANDA",
              "url": "stylenanda",
              "badge_color": "#ff0000"
          },
          "labels": [],
          "productbrands": "5813",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/3/7/37-1_7.jpg",
              "label": "SS21S1- เสื้อยืดแขนยาว สีเทา "
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/3/7/37-1_7.jpg"
          },
          "second_image": {
              "url": "",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 775,
                      "percent_off": 50
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 775
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 1550
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 775,
                      "percent_off": 50
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 1550
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 1550
                  }
              }
          }
      },
      {
          "main_category": {
              "name": null,
              "id": null,
              "level": null,
              "breadcrumbs": null
          },
          "main_category_en": {
              "name": null,
              "url_path": null,
              "link_url": null,
              "level": null,
              "id": null,
              "breadcrumbs": null
          },
          "id": 269312,
          "url_key": "short_pants_std_pf22s1_1223141400401_size_s0166499221835_1667361413835",
          "name": "STD-PF22S1 กางเกงขาสั้น พลีท สีงาช้าง ",
          "brand": {
              "name": "STYLENANDA",
              "url": "stylenanda",
              "badge_color": "#ff0000"
          },
          "labels": [
              {
                  "disabled": null,
                  "category_img": "https://media-kiwis.monline.com/media/amasty/amlabel/54321New0.25x.png",
                  "category_position": "0",
                  "product_img": "https://media-kiwis.monline.com/media/amasty/amlabel/4321New0.25x.png",
                  "product_position": "0",
                  "is_single": 0,
                  "priority": 7
              }
          ],
          "productbrands": "5813",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-f54269f4-493c-46ed-8a08-74869296f2df_1_1.jpg",
              "label": "STD-PF22S1 กางเกงขาสั้น พลีท สีงาช้าง "
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-f54269f4-493c-46ed-8a08-74869296f2df_1_1.jpg"
          },
          "second_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-394f272a-647c-4835-a7eb-5769df62c551_2.jpg",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 0,
                      "percent_off": 0
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 5250
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 5250
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 0,
                      "percent_off": 0
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 5250
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 5250
                  }
              }
          }
      },
      {
          "main_category": {
              "name": null,
              "id": null,
              "level": null,
              "breadcrumbs": null
          },
          "main_category_en": {
              "name": null,
              "url_path": null,
              "link_url": null,
              "level": null,
              "id": null,
              "breadcrumbs": null
          },
          "id": 269308,
          "url_key": "midi_dress_std_pf22s1_1223151200101_size_s3166499221827_1667361415892",
          "name": "STD-PF22S1 เดรสคอกลม สีแดง ",
          "brand": {
              "name": "STYLENANDA",
              "url": "stylenanda",
              "badge_color": "#ff0000"
          },
          "labels": [
              {
                  "disabled": null,
                  "category_img": "https://media-kiwis.monline.com/media/amasty/amlabel/54321New0.25x.png",
                  "category_position": "0",
                  "product_img": "https://media-kiwis.monline.com/media/amasty/amlabel/4321New0.25x.png",
                  "product_position": "0",
                  "is_single": 0,
                  "priority": 7
              }
          ],
          "productbrands": "5813",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-49ad77e4-8f1a-4c5d-b95e-47ba70cfc615_1_2.jpg",
              "label": "STD-PF22S1 เดรสคอกลม สีแดง "
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-49ad77e4-8f1a-4c5d-b95e-47ba70cfc615_1_2.jpg"
          },
          "second_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-cedf5d51-2200-4682-ac57-9ee3fa67d80b_1_2.jpg",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 0,
                      "percent_off": 0
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 5950
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 5950
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 0,
                      "percent_off": 0
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 5950
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 5950
                  }
              }
          }
      },
      {
          "main_category": {
              "name": "ชุดออกกำลังกาย",
              "id": 6373,
              "level": 4,
              "breadcrumbs": [
                  {
                      "category_name": "ผู้หญิง",
                      "category_id": 6112,
                      "category_level": 2
                  },
                  {
                      "category_name": "เสื้อผ้า",
                      "category_id": 6156,
                      "category_level": 3
                  }
              ]
          },
          "main_category_en": {
              "name": "Activewear",
              "url_path": "women/clothing/activewear",
              "link_url": null,
              "level": 4,
              "id": 6373,
              "breadcrumbs": [
                  {
                      "category_id": 6112,
                      "category_name": "Women",
                      "category_url_key": "women",
                      "category_level": 2,
                      "category_url_path": "women",
                      "category_link_url": null
                  },
                  {
                      "category_id": 6156,
                      "category_name": "Clothing",
                      "category_url_key": "clothing",
                      "category_level": 3,
                      "category_url_path": "women/clothing",
                      "category_link_url": null
                  }
              ]
          },
          "id": 224158,
          "url_key": "cherilon_dansmate_mpn_paa129_pub113164451486620-1",
          "name": "กางเกงขายาว MPN-PAA129 สีม่วง",
          "brand": {
              "name": "CHERILON DANS MATE",
              "url": "cherilon_dans_mate",
              "badge_color": "#ff0000"
          },
          "labels": [],
          "productbrands": "1123",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/m/p/mpn-paa129-2_3_1.jpg",
              "label": "กางเกงขายาว MPN-PAA129 สีม่วง"
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/m/p/mpn-paa129-2_3_1.jpg"
          },
          "second_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/m/p/mpn-paa129-3_3_1.jpg",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 258,
                      "percent_off": 20
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 1032
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 1290
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 258,
                      "percent_off": 20
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 1290
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 1290
                  }
              }
          }
      },
      {
          "main_category": {
              "name": "กางเกงยีนส์",
              "id": 6371,
              "level": 4,
              "breadcrumbs": [
                  {
                      "category_name": "ผู้หญิง",
                      "category_id": 6112,
                      "category_level": 2
                  },
                  {
                      "category_name": "เสื้อผ้า",
                      "category_id": 6156,
                      "category_level": 3
                  }
              ]
          },
          "main_category_en": {
              "name": "Jeans",
              "url_path": "women/clothing/jeans",
              "link_url": null,
              "level": 4,
              "id": 6371,
              "breadcrumbs": [
                  {
                      "category_id": 6112,
                      "category_name": "Women",
                      "category_url_key": "women",
                      "category_level": 2,
                      "category_url_path": "women",
                      "category_link_url": null
                  },
                  {
                      "category_id": 6156,
                      "category_name": "Clothing",
                      "category_url_key": "clothing",
                      "category_level": 3,
                      "category_url_path": "women/clothing",
                      "category_link_url": null
                  }
              ]
          },
          "id": 236007,
          "url_key": "denim_std_ss22s1_1222141200204_size_s0164944236725_1651822873242",
          "name": "กางเกงยีนส์ สีฟ้า ",
          "brand": {
              "name": "STYLENANDA",
              "url": "stylenanda",
              "badge_color": "#ff0000"
          },
          "labels": [],
          "productbrands": "5813",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-1c7d95ac-42c9-4f50-bded-efe577d59d80_1.jpg",
              "label": "กางเกงยีนส์ สีฟ้า "
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-1c7d95ac-42c9-4f50-bded-efe577d59d80_1.jpg"
          },
          "second_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-30c8bc8a-0d8c-44f9-afc7-4b68415d5fc7_1.jpg",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 595,
                      "percent_off": 10
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 5355
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 5950
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 595,
                      "percent_off": 10
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 5950
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 5950
                  }
              }
          }
      },
      {
          "main_category": {
              "name": "เดรส ",
              "id": 6368,
              "level": 4,
              "breadcrumbs": [
                  {
                      "category_name": "ผู้หญิง",
                      "category_id": 6112,
                      "category_level": 2
                  },
                  {
                      "category_name": "เสื้อผ้า",
                      "category_id": 6156,
                      "category_level": 3
                  }
              ]
          },
          "main_category_en": {
              "name": "Dresses",
              "url_path": "women/clothing/dresses",
              "link_url": null,
              "level": 4,
              "id": 6368,
              "breadcrumbs": [
                  {
                      "category_id": 6112,
                      "category_name": "Women",
                      "category_url_key": "women",
                      "category_level": 2,
                      "category_url_path": "women",
                      "category_link_url": null
                  },
                  {
                      "category_id": 6156,
                      "category_name": "Clothing",
                      "category_url_key": "clothing",
                      "category_level": 3,
                      "category_url_path": "women/clothing",
                      "category_link_url": null
                  }
              ]
          },
          "id": 232737,
          "url_key": "asymmetric_two_tone_dress_422164909474725-1",
          "name": "เดรสลายทางทูโทนแขนกุดสีขาวดำ ",
          "brand": {
              "name": "MIRAH",
              "url": "mirah",
              "badge_color": "#ff0000"
          },
          "labels": [],
          "productbrands": "14350",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/m/r/mr21cf11s1-1_3_1.jpg",
              "label": "เดรสลายทางทูโทนแขนกุดสีขาวดำ "
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/m/r/mr21cf11s1-1_3_1.jpg"
          },
          "second_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/m/r/mr21cf11s1-4_3_1.jpg",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 0,
                      "percent_off": 0
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 4690
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 4690
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 0,
                      "percent_off": 0
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 4690
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 4690
                  }
              }
          }
      },
      {
          "main_category": {
              "name": "เสื้อยืด",
              "id": 6365,
              "level": 4,
              "breadcrumbs": [
                  {
                      "category_name": "ผู้หญิง",
                      "category_id": 6112,
                      "category_level": 2
                  },
                  {
                      "category_name": "เสื้อผ้า",
                      "category_id": 6156,
                      "category_level": 3
                  }
              ]
          },
          "main_category_en": {
              "name": "T-Shirts",
              "url_path": "women/clothing/t-shirts",
              "link_url": null,
              "level": 4,
              "id": 6365,
              "breadcrumbs": [
                  {
                      "category_id": 6112,
                      "category_name": "Women",
                      "category_url_key": "women",
                      "category_level": 2,
                      "category_url_path": "women",
                      "category_link_url": null
                  },
                  {
                      "category_id": 6156,
                      "category_name": "Clothing",
                      "category_url_key": "clothing",
                      "category_level": 3,
                      "category_url_path": "women/clothing",
                      "category_link_url": null
                  }
              ]
          },
          "id": 228582,
          "url_key": "balsamico_tee_s38164693408426-1",
          "name": "เสื้อยืดสกรีน Balsamico สีดำ",
          "brand": {
              "name": "GLOC",
              "url": "gloc",
              "badge_color": "#ff0000"
          },
          "labels": [],
          "productbrands": "14009",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/g/l/gloc_one0373_3.jpg",
              "label": "เสื้อยืดสกรีน Balsamico สีดำ"
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/g/l/gloc_one0373_3.jpg"
          },
          "second_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/g/l/gloc_one0070-1_3.jpg",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 0,
                      "percent_off": 0
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 790
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 790
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 0,
                      "percent_off": 0
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 790
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 790
                  }
              }
          }
      },
      {
          "main_category": {
              "name": "เสื้อยืด",
              "id": 6365,
              "level": 4,
              "breadcrumbs": [
                  {
                      "category_name": "ผู้หญิง",
                      "category_id": 6112,
                      "category_level": 2
                  },
                  {
                      "category_name": "เสื้อผ้า",
                      "category_id": 6156,
                      "category_level": 3
                  }
              ]
          },
          "main_category_en": {
              "name": "T-Shirts",
              "url_path": "women/clothing/t-shirts",
              "link_url": null,
              "level": 4,
              "id": 6365,
              "breadcrumbs": [
                  {
                      "category_id": 6112,
                      "category_name": "Women",
                      "category_url_key": "women",
                      "category_level": 2,
                      "category_url_path": "women",
                      "category_link_url": null
                  },
                  {
                      "category_id": 6156,
                      "category_name": "Clothing",
                      "category_url_key": "clothing",
                      "category_level": 3,
                      "category_url_path": "women/clothing",
                      "category_link_url": null
                  }
              ]
          },
          "id": 235998,
          "url_key": "short_sleeve_t_std_ss22s1_1222111100303_size_s19164944194220_1651822831878",
          "name": "เสื้อยืดแขนสั้น สีฟ้า ",
          "brand": {
              "name": "STYLENANDA",
              "url": "stylenanda",
              "badge_color": "#ff0000"
          },
          "labels": [],
          "productbrands": "5813",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-52c23257-4873-490a-bfa5-e952bd2741e0_1.jpg",
              "label": "เสื้อยืดแขนสั้น สีฟ้า "
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-52c23257-4873-490a-bfa5-e952bd2741e0_1.jpg"
          },
          "second_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-5a720b69-4a18-4008-88f8-e0611b2ea596_1.jpg",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 325,
                      "percent_off": 10
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 2925
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 3250
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 325,
                      "percent_off": 10
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 3250
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 3250
                  }
              }
          }
      },
      {
          "main_category": {
              "name": null,
              "id": null,
              "level": null,
              "breadcrumbs": null
          },
          "main_category_en": {
              "name": null,
              "url_path": null,
              "link_url": null,
              "level": null,
              "id": null,
              "breadcrumbs": null
          },
          "id": 261872,
          "url_key": "tee_shirts_short_sl_gr_s6165973566939_1664527959644",
          "name": "เสื้อยืดแขนสั้น สีเขียว ",
          "brand": {
              "name": "EP",
              "url": "ep",
              "badge_color": "#ff0000"
          },
          "labels": [
              {
                  "disabled": null,
                  "category_img": "https://media-kiwis.monline.com/media/amasty/amlabel/54321New0.25x.png",
                  "category_position": "0",
                  "product_img": "https://media-kiwis.monline.com/media/amasty/amlabel/4321New0.25x.png",
                  "product_position": "0",
                  "is_single": 0,
                  "priority": 7
              }
          ],
          "productbrands": "1900",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-533c9679-d9cf-49be-808e-d3b51347947a_2.jpg",
              "label": "เสื้อยืดแขนสั้น สีเขียว "
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-533c9679-d9cf-49be-808e-d3b51347947a_2.jpg"
          },
          "second_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-25e8f8bd-ac33-4287-b82f-062001573a3d_2.jpg",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 0,
                      "percent_off": 0
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 795
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 795
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 0,
                      "percent_off": 0
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 795
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 795
                  }
              }
          }
      },
      {
          "main_category": {
              "name": "เสื้อเบลาส์",
              "id": 6364,
              "level": 4,
              "breadcrumbs": [
                  {
                      "category_name": "ผู้หญิง",
                      "category_id": 6112,
                      "category_level": 2
                  },
                  {
                      "category_name": "เสื้อผ้า",
                      "category_id": 6156,
                      "category_level": 3
                  }
              ]
          },
          "main_category_en": {
              "name": "Blouses & Tops",
              "url_path": "women/clothing/blousestops",
              "link_url": null,
              "level": 4,
              "id": 6364,
              "breadcrumbs": [
                  {
                      "category_id": 6112,
                      "category_name": "Women",
                      "category_url_key": "women",
                      "category_level": 2,
                      "category_url_path": "women",
                      "category_link_url": null
                  },
                  {
                      "category_id": 6156,
                      "category_name": "Clothing",
                      "category_url_key": "clothing",
                      "category_level": 3,
                      "category_url_path": "women/clothing",
                      "category_link_url": null
                  }
              ]
          },
          "id": 236002,
          "url_key": "no_sleeve_t_std_ss22s1_1222111300401_size_s6164944235338_1651822846148",
          "name": "เสื้อสายเดี่ยว สีดำ",
          "brand": {
              "name": "STYLENANDA",
              "url": "stylenanda",
              "badge_color": "#ff0000"
          },
          "labels": [],
          "productbrands": "5813",
          "image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-447ed0ba-7078-40ae-a2a3-79ee923aa34f_1_1.jpg",
              "label": "เสื้อสายเดี่ยว สีดำ"
          },
          "small_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-447ed0ba-7078-40ae-a2a3-79ee923aa34f_1_1.jpg"
          },
          "second_image": {
              "url": "https://media-kiwis.monline.com/media/catalog/product/cache/4eae07c2f68a268511cfb4de77370966/p/r/product-fcab6d55-feff-4b0b-8fd9-6301cb71f99e_1_1.jpg",
              "label": null
          },
          "price_range": {
              "minimum_price": {
                  "discount": {
                      "amount_off": 155,
                      "percent_off": 10
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 1395
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 1550
                  }
              },
              "maximum_price": {
                  "discount": {
                      "amount_off": 155,
                      "percent_off": 10
                  },
                  "final_price": {
                      "currency": "THB",
                      "value": 1550
                  },
                  "regular_price": {
                      "currency": "THB",
                      "value": 1550
                  }
              }
          }
      }
  ]
  }
    
  componentDidMount() {
    document.title = this.props.title
    axios.get(`https://asia-southeast1-msellercenter.cloudfunctions.net/testProducts?pageSize=${this.state.maxSize}`).then(res => {
      this.setState({product: res.data.listProduct.items})
      this.setState({maxSize: res.data.listProduct.total_count})
      this.setState({selectedImage: this.state.mockupData[this.props.index].image.url})
    })
  }

  setImage(url){
    this.setState({selectedImage: url})
  }

  convertTHB(price) {
    if (typeof price === 'number') {
      let len = price.toString().length

      let arrayNum = []
      let loopCount = 0
      let numText = ''
      switch (true) {
        case len >= 4:
          for (var i = len - 1; i >= 0; i--) {
            loopCount++
            arrayNum.push(price.toString()[i])
            if (loopCount % 3 === 0 && loopCount >= 3) {
              arrayNum.push(',')
            }
            loopCount = loopCount % 3 === 0 ? 0 : loopCount
          }

          if (arrayNum.slice(-1)[0] === ',') {
            arrayNum.pop()
          }

          for (var k = arrayNum.length - 1; k >= 0; k--) {
            numText += arrayNum[k]
          }

          return numText
        default:
          return price
      }
    }
  }

    
  render() {

  
    return (
      <div className="container_product">
        <div className="productWrapper">
              <div className="prodThumbnails">
                <div className="mainThumbnail">
                  <img src={this.state.selectedImage} alt={this.state.mockupData[this.props.index]?.image?.label}/>
                </div>
                  {
                    this.state.mockupData[this.props.index]?.second_image?.url !== "" ? 
                    (<div className="secondaryThumbnail">
                      <img onClick={()=>{this.setImage(this.state.mockupData[this.props.index].small_image.url)}} src={this.state.mockupData[this.props.index]?.small_image?.url} alt={this.state.mockupData[this.props.index]?.image?.label}/>
                      <img onClick={()=>{this.setImage(this.state.mockupData[this.props.index].second_image.url)}} src={this.state.mockupData[this.props.index]?.second_image?.url} alt={this.state.mockupData[this.props.index]?.image?.label}/>
                      </div>) : ''
                  }
                  
              </div>
              <div className="prodDetails">
                <h1>{this.state.mockupData[this.props.index]?.brand.name}</h1>
                <br></br>
                <h4>{this.state.mockupData[this.props.index]?.name}</h4>
                <p className="prodDesc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio neque fugiat, atque consectetur odio saepe quod, error ipsam vero maxime, recusandae voluptas! Est quae ipsa eos, at debitis rem nihil.</p>
                <h3 className="discountedPrice">
                  {this.state.mockupData[this.props.index]?.price_range.minimum_price?.final_price?.value !== null ? 
                   '฿'+this.convertTHB(this.state.mockupData[this.props.index]?.price_range.minimum_price?.final_price?.value) : ''}
                  {this.state.mockupData[this.props.index]?.price_range.minimum_price?.final_price?.value !==
                  this.state.mockupData[this.props.index]?.price_range.minimum_price?.regular_price?.value ? (
                    <span className="regularPrice">
                      ฿{this.convertTHB(this.state.mockupData[this.props.index]?.price_range.minimum_price?.regular_price?.value)}
                    </span>
                  ) : (
                    ''
                  )}
                </h3>
                {this.state.mockupData[this.props.index]?.price_range.minimum_price?.final_price?.value !==
                this.state.mockupData[this.props.index]?.price_range.minimum_price?.regular_price?.value ? (
                  <h4 className="savingAmount">
                    SAVE ฿
                    {this.convertTHB(this.state.mockupData[this.props.index]?.price_range.minimum_price?.regular_price?.value -
                      this.state.mockupData[this.props.index]?.price_range.minimum_price?.final_price?.value)}
                  </h4>
                ) : (
                  ''
                  )}
                  <p className="options">
                  <span>Be the first to review</span>
                  <span>Add to Compare</span>
                  <span>Save to Wishlist</span>
                    </p>
                  <button className="addToCartBtn"><AddShoppingCartIcon/></button>
              </div>
            </div>
      </div>
    )
  }
}
