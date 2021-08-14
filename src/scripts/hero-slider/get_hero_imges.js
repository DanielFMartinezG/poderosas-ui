const routh = 'http://localhost:3000';

async function hero_array(){
    class Hero_images{
        constructor(img_slider_hero,slider_box_id,slider_position_id){
            this.img_slider_hero = img_slider_hero;
            this.slider_box_id = slider_box_id;
            this.slider_position_id = slider_position_id;
        }
    }
    const response = await fetch(`${routh}/heroSlider/getPhrases`);
    const jsonResponse = await response.json(); 
    const content_hero_slider = jsonResponse.result; 
    const slider_hero_array = [];
    for(let i=0;i<content_hero_slider.length;i++){
        let hero_img =  new Hero_images(content_hero_slider[i],"hero-slider-img-"+(i+1),"hero-item-position-"+ (i+1) );
        slider_hero_array.push(hero_img);
    }
    return slider_hero_array;
}
export default hero_array;