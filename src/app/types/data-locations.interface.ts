import { Locations } from './locations.interface'

export interface DataLocation{
    current_country_id: number;
    locations: Locations[];
    wp_total: number,
    total: number,
    success: boolean
}