import { Injectable } from '@angular/core';
import { DataLocation } from '../types/data-locations.interface'
import { Locations } from '../types/locations.interface'


const PERIOD = {
  morning: {
    first: '06',
    last: '12'
  },
  afternoon: {
    first: '12',
    last: '18'
  },
  night: {
    first: '18',
    last: '23'
  },
}

type PERIOD_INDEX = 'morning' | 'afternoon' | 'night';

@Injectable({
  providedIn: 'root'
})
export class FilterUnitServiceService {

  constructor() { }

  filter(results: Locations[], showClosed: boolean, hour: string){
    
    let period = PERIOD[hour as PERIOD_INDEX];      
    let locations = results;

    if(hour){
      
      const OPEN_HOUR = period.first;
      const CLOSE_HOUR = period.last;

      return locations.filter(location => this.filterUnits(location, showClosed, OPEN_HOUR, CLOSE_HOUR));

    }else{      
      if(!showClosed){        
        return results.filter(location => location.opened === true)
      }else{        
        return results
      }
    }

  }


  filterUnits(units: Locations, showClosed: boolean, open_hour: string, close_hour: string){
    
    let open_hour_filter = parseInt(open_hour, 10);
    let close_hour_filter = parseInt(close_hour, 10);

    let today = this.weekDayConvert(new Date().getDay());

    if(units.schedules){

      for(let i = 0; i < units.schedules.length; i++){

        let schedulesHour = units.schedules[i].hour;
        let schedulesdays = units.schedules[i].weekdays;

        if(schedulesdays === today){
          let openHour = parseInt(schedulesHour !== 'Fechada' ? schedulesHour.split(' às ')[0].toString().replace('h','') : '0');
          let closeHour = parseInt(schedulesHour !== 'Fechada' ? schedulesHour.split(' às ')[1].toString().replace('h','') : '0');

          if((openHour >= open_hour_filter || closeHour <= close_hour_filter)
              && ((!showClosed && units.opened) || showClosed))
                return true;
          else
            return false;

        }
    }

    }

    return false;

  }


  weekDayConvert(weekDay: number){
    switch (weekDay){
      case 0:
        return 'Dom.'
      case 6:
        return 'Sáb.'
      default:
        return 'Seg. à Sex.'
    }
  }

}
