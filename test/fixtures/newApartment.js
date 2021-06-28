require("../../src/app");
const {Apartment} = require('../../src/models/index');  


async function newApartment(){
    
    const property1 = new Apartment({

        title: "Apartamento 1",
        price: 35,
        currency: "EUR",
        availability: "Disponible",
        owner: "Manolo",
        phone: 635255868,
        capacity: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec neque nisl. Suspendisse vel nisl porta, malesuada libero in, pharetra justo. Aliquam lorem ipsum, ultrices vitae mauris ut, egestas pretium mi. Vestibulum rhoncus arcu nisi, quis bibendum justo pretium sit amet. Donec et lorem at nunc congue placerat et at velit. Aliquam eu malesuada risus, eu imperdiet massa. Sed vel efficitur ipsum. Quisque tempor, lorem in egestas laoreet, turpis arcu cursus ipsum, at eleifend dolor urna vel tortor. Fusce fringilla nibh in lorem gravida, in sagittis elit suscipit. Donec efficitur posuere posuere. Fusce dictum ut ex id rutrum. Maecenas eu nisi vel ipsum posuere elementum. Nullam turpis sem, lacinia non maximus in, mollis non turpis. Nunc ac viverra odio, eu rutrum turpis. Aenean dapibus in sapien vel lobortis. Suspendisse ultricies augue vel massa pellentesque iaculis. Nam tincidunt risus sapien, at faucibus libero varius in. Sed ullamcorper est ac varius cursus. In ante sapien, auctor at hendrerit non, accumsan et nibh. Phasellus vestibulum non velit euismod maximus. Vestibulum et sapien non lectus fringilla dictum tristique sit amet augue. Vivamus ac lorem sit amet ligula efficitur semper et id urna. Pellentesque varius elementum libero, eu fringilla leo faucibus dapibus. Pellentesque eleifend lacinia.",
        area: 45,
        address: {
            street: "Sepulveda",
            city: "Barcelona",
            district: "Raval",
        },
        rules: "No fumar",
        amenities: {
            fire_detector: true,
            air_conditioner: true,
            heating: true,
            wc_private: true,
            wash_machine: true,
            tv: true,
            wifi: true,
            dryer: true,
            swimming_pool: true,
            balcony: true,
            terrace: true,
            exterior_views: true,
            interior_views: true,
            closet:true,
            emergency_exit: true,
            accessibility: true,
            kitchen: true
        },
        rules: {
            smoking: true,
            pets: true,
            noise: true,
            invite: true
        },
        //rule_extra: {type: String },
        main_photo: {
            url: "/assets/img/properties/cover1.jpg",
            description: "Descripcion foto cover"
        },
        photos:[{
            url: "/assets/img/properties/photo_detail_1.jpg",
            description: "Descripcion foto 1"
        },{
            url: "/assets/img/properties/photo_detail_2.jpg",
            description: "Descripcion foto 2"
        },{
            url: "/assets/img/properties/photo_detail_3.jpg",
            description: "Descripcion foto 3"
        }],
        video: "/assets/videos/tour.mp4",
        numberRooms: 4,
        numberBaths: 1,

    });

    const property2 = new Apartment({

        title: "Apartamento 2",
        price: 35,
        currency: "EUR",
        availability: "Disponible",
        owner: "Juan",
        phone: 635255868,
        capacity: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec neque nisl. Suspendisse vel nisl porta, malesuada libero in, pharetra justo. Aliquam lorem ipsum, ultrices vitae mauris ut, egestas pretium mi. Vestibulum rhoncus arcu nisi, quis bibendum justo pretium sit amet. Donec et lorem at nunc congue placerat et at velit. Aliquam eu malesuada risus, eu imperdiet massa. Sed vel efficitur ipsum. Quisque tempor, lorem in egestas laoreet, turpis arcu cursus ipsum, at eleifend dolor urna vel tortor. Fusce fringilla nibh in lorem gravida, in sagittis elit suscipit. Donec efficitur posuere posuere. Fusce dictum ut ex id rutrum. Maecenas eu nisi vel ipsum posuere elementum. Nullam turpis sem, lacinia non maximus in, mollis non turpis. Nunc ac viverra odio, eu rutrum turpis. Aenean dapibus in sapien vel lobortis. Suspendisse ultricies augue vel massa pellentesque iaculis. Nam tincidunt risus sapien, at faucibus libero varius in. Sed ullamcorper est ac varius cursus. In ante sapien, auctor at hendrerit non, accumsan et nibh. Phasellus vestibulum non velit euismod maximus. Vestibulum et sapien non lectus fringilla dictum tristique sit amet augue. Vivamus ac lorem sit amet ligula efficitur semper et id urna. Pellentesque varius elementum libero, eu fringilla leo faucibus dapibus. Pellentesque eleifend lacinia.",
        area: 45,
        address: {
            street: "Sepulveda",
            city: "Barcelona",
            district: "Raval",
        },
        rules: "No fumar",
        amenities: {
            fire_detector: true,
            air_conditioner: true,
            heating: true,
            wc_private: true,
            wash_machine: true,
            tv: true,
            wifi: true,
            dryer: true,
            swimming_pool: true,
            balcony: true,
            terrace: true,
            exterior_views: true,
            interior_views: true,
            closet:true,
            emergency_exit: true,
            accessibility: true,
            kitchen: true
        },
        rules: {
            smoking: true,
            pets: true,
            noise: true,
            invite: true
        },
        //rule_extra: {type: String },
        main_photo: {
            url: "/assets/img/properties/cover2.jpg",
            description: "Descripcion foto cover"
        },
        photos:[{
            url: "/assets/img/properties/photo_detail_1.jpg",
            description: "Descripcion foto 1"
        },{
            url: "/assets/img/properties/photo_detail_2.jpg",
            description: "Descripcion foto 2"
        },{
            url: "/assets/img/properties/photo_detail_3.jpg",
            description: "Descripcion foto 3"
        }],
        video: "/assets/videos/tour.mp4",
        numberRooms: 4,
        numberBaths: 1,

    });

    const property3 = new Apartment({

        title: "Apartamento 3",
        price: 80,
        currency: "EUR",
        availability: "Disponible",
        owner: "Jose",
        phone: 635255868,
        capacity: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec neque nisl. Suspendisse vel nisl porta, malesuada libero in, pharetra justo. Aliquam lorem ipsum, ultrices vitae mauris ut, egestas pretium mi. Vestibulum rhoncus arcu nisi, quis bibendum justo pretium sit amet. Donec et lorem at nunc congue placerat et at velit. Aliquam eu malesuada risus, eu imperdiet massa. Sed vel efficitur ipsum. Quisque tempor, lorem in egestas laoreet, turpis arcu cursus ipsum, at eleifend dolor urna vel tortor. Fusce fringilla nibh in lorem gravida, in sagittis elit suscipit. Donec efficitur posuere posuere. Fusce dictum ut ex id rutrum. Maecenas eu nisi vel ipsum posuere elementum. Nullam turpis sem, lacinia non maximus in, mollis non turpis. Nunc ac viverra odio, eu rutrum turpis. Aenean dapibus in sapien vel lobortis. Suspendisse ultricies augue vel massa pellentesque iaculis. Nam tincidunt risus sapien, at faucibus libero varius in. Sed ullamcorper est ac varius cursus. In ante sapien, auctor at hendrerit non, accumsan et nibh. Phasellus vestibulum non velit euismod maximus. Vestibulum et sapien non lectus fringilla dictum tristique sit amet augue. Vivamus ac lorem sit amet ligula efficitur semper et id urna. Pellentesque varius elementum libero, eu fringilla leo faucibus dapibus. Pellentesque eleifend lacinia.",
        area: 90,
        address: {
            street: "Sepulveda",
            city: "Barcelona",
            district: "Raval",
        },
        rules: "No fumar",
        amenities: {
            fire_detector: true,
            air_conditioner: true,
            heating: true,
            wc_private: true,
            wash_machine: true,
            tv: true,
            wifi: true,
            dryer: true,
            swimming_pool: true,
            balcony: true,
            terrace: true,
            exterior_views: true,
            interior_views: true,
            closet:true,
            emergency_exit: true,
            accessibility: true,
            kitchen: true
        },
        rules: {
            smoking: true,
            pets: true,
            noise: true,
            invite: true
        },
        //rule_extra: {type: String },
        main_photo: {
            url: "/assets/img/properties/cover3.jpg",
            description: "Descripcion foto cover"
        },
        photos:[{
            url: "/assets/img/properties/photo_detail_1.jpg",
            description: "Descripcion foto 1"
        },{
            url: "/assets/img/properties/photo_detail_2.jpg",
            description: "Descripcion foto 2"
        },{
            url: "/assets/img/properties/photo_detail_3.jpg",
            description: "Descripcion foto 3"
        }],
        video: "/assets/videos/tour.mp4",
        numberRooms: 4,
        numberBaths: 1,

    });

    const property4 = new Apartment({

        title: "Apartamento 4",
        price: 120,
        currency: "EUR",
        availability: "Disponible",
        owner: "Laura",
        phone: 635255868,
        capacity: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec neque nisl. Suspendisse vel nisl porta, malesuada libero in, pharetra justo. Aliquam lorem ipsum, ultrices vitae mauris ut, egestas pretium mi. Vestibulum rhoncus arcu nisi, quis bibendum justo pretium sit amet. Donec et lorem at nunc congue placerat et at velit. Aliquam eu malesuada risus, eu imperdiet massa. Sed vel efficitur ipsum. Quisque tempor, lorem in egestas laoreet, turpis arcu cursus ipsum, at eleifend dolor urna vel tortor. Fusce fringilla nibh in lorem gravida, in sagittis elit suscipit. Donec efficitur posuere posuere. Fusce dictum ut ex id rutrum. Maecenas eu nisi vel ipsum posuere elementum. Nullam turpis sem, lacinia non maximus in, mollis non turpis. Nunc ac viverra odio, eu rutrum turpis. Aenean dapibus in sapien vel lobortis. Suspendisse ultricies augue vel massa pellentesque iaculis. Nam tincidunt risus sapien, at faucibus libero varius in. Sed ullamcorper est ac varius cursus. In ante sapien, auctor at hendrerit non, accumsan et nibh. Phasellus vestibulum non velit euismod maximus. Vestibulum et sapien non lectus fringilla dictum tristique sit amet augue. Vivamus ac lorem sit amet ligula efficitur semper et id urna. Pellentesque varius elementum libero, eu fringilla leo faucibus dapibus. Pellentesque eleifend lacinia.",
        area: 85,
        address: {
            street: "Sepulveda",
            city: "Madrid",
            district: "Raval",
        },
        rules: "No fumar",
        amenities: {
            fire_detector: true,
            air_conditioner: true,
            heating: true,
            wc_private: true,
            wash_machine: true,
            tv: true,
            wifi: true,
            dryer: true,
            swimming_pool: true,
            balcony: true,
            terrace: true,
            exterior_views: true,
            interior_views: true,
            closet:true,
            emergency_exit: true,
            accessibility: true,
            kitchen: true
        },
        rules: {
            smoking: true,
            pets: true,
            noise: true,
            invite: true
        },
        //rule_extra: {type: String },
        main_photo: {
            url: "/assets/img/properties/cover4.jpg",
            description: "Descripcion foto cover"
        },
        photos:[{
            url: "/assets/img/properties/photo_detail_1.jpg",
            description: "Descripcion foto 1"
        },{
            url: "/assets/img/properties/photo_detail_2.jpg",
            description: "Descripcion foto 2"
        },{
            url: "/assets/img/properties/photo_detail_3.jpg",
            description: "Descripcion foto 3"
        }],
        video: "/assets/videos/tour.mp4",
        numberRooms: 5,
        numberBaths: 2,

    });
    
    const apartment1 = await property1.save();
    const apartment2 = await property2.save();
    const apartment3 = await property3.save();
    const apartment4 = await property4.save();

}

newApartment()