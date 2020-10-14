import Orphanage from '../models/Orphanage';
import imagesView from './images_views';

export default {
    render(orphanage: Orphanage){
        return {
            id: orphanage.id,
            name: orphanage.name,
            latitude: orphanage.latitude,
            logintude: orphanage.logintude,
            about: orphanage.about,
            instructions:orphanage.instructions,
            opening_hours: orphanage.opening_hours,
            open_on_weekends: orphanage.open_on_weekends,
            images: imagesView.renderMany(orphanage.images)
        };
    },

    renderMany(orphanage: Orphanage[]){
        return orphanage.map(orphanage => this.render(orphanage));
    }
};