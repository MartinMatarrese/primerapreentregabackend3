export default class UserResDto {
    constructor(user) {
        this.id = user._id;
        this.nombre = user.first_name;
        this.apellido = user.last_name;
        this.email = user.email;
        this.edad = user.age;
        this.role = user.role;
        this.pets = user.pets
        this.carrito = user.cart;
    };
};