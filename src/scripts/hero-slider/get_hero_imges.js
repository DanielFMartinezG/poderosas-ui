let hero_array = () =>{
    class Hero_images{
        constructor(img_slider_hero,slider_box_id,slider_position_id){
            this.img_slider_hero = img_slider_hero;
            this.slider_box_id = slider_box_id;
            this.slider_position_id = slider_position_id;
        }
    }
    //información para el slider el imagenes de la sección hero
    let content_hero_slider = [
        {
            hero_img_src: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/59c4f5655bafe82c692a7052/gato-marron_0.jpg",
            text_hero: '"Frease poderosas llamativas 1 Frease poderosas llamativas 1 Frease poderosas llamativas 1"'
        },
        {
            hero_img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp3vqFyltaIjGBPKgAM7kAGZ6sBIPAHFR37Q&usqp=CAU",
            text_hero: '"Frease poderosas llamativas 2 Frease poderosas llamativas 2 Frease poderosas llamativas 2"'
        },
        {
            hero_img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs0fN663RzbDmhWldzMGuHTFFqbgRRW6RFFw&usqp=CAU",
            text_hero: '"Frease poderosas llamativas 3 Frease poderosas llamativas 3 Frease poderosas llamativas 3"'
        },
        {
            hero_img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkzsKdEBId9a9MKJNUIAdSEOB7jBR83_dyfA&usqp=CAU",
            text_hero: '"Frease poderosas llamativas 4 Frease poderosas llamativas 4 Frease poderosas llamativas 4"'
        },
        {
            hero_img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyVjluR6Bw4-1VNNy74EhVCcmUPDrPwWAmQQ&usqp=CAU",
            text_hero: '"Frease poderosas llamativas 5 Frease poderosas llamativas 5 Frease poderosas llamativas 5"'
        },
    ];
    const slider_hero_array = [];
    for(let i=0;i<content_hero_slider.length;i++){
        let hero_img =  new Hero_images(content_hero_slider[i],"hero-slider-img-"+(i+1),"hero-item-position-"+ (i+1) );
        slider_hero_array.push(hero_img);
    }
    return slider_hero_array;
}
export default hero_array;