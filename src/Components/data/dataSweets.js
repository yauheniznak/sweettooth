const dataSweets = [
    {
        id:1,
        price:3,
        img:"https://images.unsplash.com/photo-1618111415112-793c80d2fb3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8QWxtb25kJTIwY3JvaXNzYW50fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        name:"Almond croissant",
        category:"CROISSANT",
    },
    {
        id:2,
        price:35,
        img:"https://images.unsplash.com/photo-1504387720438-88468770d0fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8QkFOQU5BJTIwQ0FLRXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        name:"Banana Cake",
        category:"CAKE",
    },
    {
        id:3,
        price:33,
        img:"https://images.unsplash.com/photo-1501437638401-4addcfd56d3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Q0FSUk9UJTIwQ0FLRXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        name:"Carrot Cake",
        category:"CAKE",
    },
    {
        id:4,
        price:44,
        img:"https://images.unsplash.com/photo-1595904518754-8f0a357577c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fENIRVJSWSUyMFBJRXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        name:"Cherry Pie",
        category:"PIE",
    },
    {
        id:5,
        price:48,
        img:"https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fENIT0NPTEFURSUyMENBS0V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        name:"Chocolate Cake",
        category:"CAKE",
    },
    {
        id:6,
        price:4,
        img:"https://images.unsplash.com/photo-1613697193450-23f766dbaa73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fENIT0NPTEFURSUyMENST2lzc2FudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        name:"Chocolate croissant",
        category:"CROISSANT",
    },
    {
        id:7,
        price:7,
        img:"https://images.unsplash.com/photo-1580915411954-282cb1b0d780?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Q0hPQ09MQVRFJTIwSUNFJTIwQ1JFQU18ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        name:" 2 Scoops of Chocolate Ice-cream",
        category:"ICE-CREAM",
    },
    {
        id:8,
        price:15,
        img:"https://media.istockphoto.com/id/1350427117/photo/savory-crepes-with-creamy-garlic-chicken-and-mushrooms.jpg?b=1&s=170667a&w=0&k=20&c=lDIBOJSOUKa1wVtbYRAuafX9xD3hr--gOuIo56EJpKs=",
        name:" Crepes with cheese and mushroom",
        category:"CREPE",
    },
    {
        id:9,
        price:11,
        img:"https://images.unsplash.com/photo-1637036124732-cb0fab13bb15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Q1JFUEUlMjBXSVRIJTIwSkFNfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        name:" Crepes with jam",
        category:"CREPE",
    },
    {
        id:10,
        price:13,
        img:"https://images.unsplash.com/photo-1519676867240-f03562e64548?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Q1JFUEUlMjBXSVRIJTIwUklDQ09UQSUyMnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        name:" Crepes with ricotta",
        category:"CREPE",
    },
    {
        id:11,
        price:17,
        img:"https://images.unsplash.com/photo-1667902687249-0dfe266a3b2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fENSRVBFJTIwV0lUSCUyMEZSVUlUU3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        name:" Crepes with fruits",
        category:"CREPE",
    },
    {
        id:12,
        price:12,
        img:"https://media.istockphoto.com/id/1132230754/photo/tasty-crepe-with-hazelnut-chocolate-spread-and-banana.jpg?b=1&s=170667a&w=0&k=20&c=3Z2-xc4BLDd0Io_z7xdt_v4ZVi-i8vKFMGGk5M1-M-U=",
        name:" Crepes with Nutella",
        category:"CREPE",
    },
    {
        id:13,
        price:10,
        img:"https://media.istockphoto.com/id/958205114/photo/thin-crepes-with-orange-sauce.jpg?b=1&s=170667a&w=0&k=20&c=ce4spa38g2KOOvpbhwByx10-CmGuOZNf1fzxipwuaSk=",
        name:" Crepes with Syrup",
        category:"CREPE",
    },
    {
        id:14,
        price:44,
        img:"https://images.unsplash.com/photo-1603664113651-2f4fde639823?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8RlJVSVQlMjBDQUtFfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        name:" Fruits cake",
        category:"CAKE",
    },
    {
        id:15,
        price:6,
        img:"https://images.unsplash.com/photo-1488900128323-21503983a07e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8RlJVSVQlMjBJQ0UlMjBDUkVBTXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        name:" 2 Scoops of Fruits Ice-Cream",
        category:"ICE-CREAM",
    },
    {
        id:16,
        price:41,
        img:"https://images.unsplash.com/photo-1614174486496-344ef3e9d870?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fExFTU9OJTIwQ0FLRXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        name:" Lemon Cake",
        category:"CAKE",
    },
    {
        id:17,
        price:2,
        img:"https://media.istockphoto.com/id/525303133/photo/macaroons-on-wooden-table.jpg?b=1&s=170667a&w=0&k=20&c=HyEriFC0PAbsrbgEgp_kPn5Cw7rvwdWCAszMBSybkr0=",
        name:"Macaroon",
        category:"FAVORITES",
    },
    {
        id:18,
        price:8,
        img:"https://media.istockphoto.com/id/623365634/photo/bowls-of-various-ice-creams.jpg?b=1&s=170667a&w=0&k=20&c=ttTG2Kov6B1NuJSvGtoyyctjydsZ1qBXGgcTYmoI1xY=",
        name:"2 Scoops of Mix Ice-Cream",
        category:"ICE-CREAM",
    },
    {
        id:19,
        price:3,
        img:"https://media.istockphoto.com/id/1429413582/photo/two-halves-of-a-croissant.jpg?b=1&s=170667a&w=0&k=20&c=Kux-ypaf7N1SxZxsgg6IoaAdQewlbqAUYcGl2IncMFU=",
        name:"Plain croissant",
        category:"CROISSANT",
    },
    {
        id:20,
        price:6,
        img:"https://media.istockphoto.com/id/1279939724/photo/plum-galette-recipe-with-red-plums-ingredients.jpg?b=1&s=170667a&w=0&k=20&c=dPljE-Z8rBenw7NPxUGXhbML7LmiwC7hYgkB4E40Oxo=",
        name:"Plum Tarte",
        category:"FAVORITES",
    },
    {
        id:21,
        price:40,
        img:"https://images.unsplash.com/photo-1594054528735-d3782132b380?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8VkFOSUxMQSUyMENBS0V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
        name:" Vanilla Cake",
        category:"CAKE",
    },
    {
        id:22,
        price:8,
        img:"https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8VkFOSUxMQSUyMElDRSUyMENSRUFNfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        name:"2 Scoops of Vanilla Ice-Cream",
        category:"ICE-CREAM",
    },
    {
        id:23,
        price:36,
        img:"https://images.unsplash.com/photo-1622028715355-ec58f12a7f9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8VkVHQU4lMjBDQUtFfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        name:"Vegan Cake",
        category:"FAVORITES",
    },
    {
        id:24,
        price:44,
        img:"https://media.istockphoto.com/id/1086525264/photo/red-velvet-cake-slices.jpg?b=1&s=170667a&w=0&k=20&c=WEB3TZ9sZhfu1MLx_oKFyHZFBwRTcnqBtvIaLVXY-4I=",
        name:" Velvet Cake",
        category:"CAKE",
    },
    {
        id:25,
        price:13,
        img:"https://images.unsplash.com/photo-1576615278693-f8e095e37e01?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8V2FmZmxlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        name:"Waffles",
        category:"FAVORITES",
    },
    {
        id:26,
        price:41,
        img:"https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
        name:"Apple Pie",
        category:"PIE",
    },
    {
        id:27,
        price:50,
        img:"https://images.unsplash.com/photo-1593307744921-00b909a78419?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBpZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
        name:"Pecan Pie",
        category:"PIE",
    }

]

export default dataSweets