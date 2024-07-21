import './style.css';
import { data } from "autoprefixer";
import Alpine from 'alpinejs';
import api from './data/api';

window.Alpine = Alpine;

document.addEventListener('alpine:init', () => {
    Alpine.data('prod', api)
})



Alpine.start();