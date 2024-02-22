import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'filterProviders'
})

export class filterPipePipe implements PipeTransform{
    transform(value: any[], args?: any):any{
        if(args === '' || args === undefined){
            return value;
        }

        //filtrar sólo por razón social -- para agregar

        return value.filter((item) =>
            JSON.stringify(item.providers_denomination).toLowerCase().includes(args) || JSON.stringify(item.providers_code).toLowerCase().includes(args));
    }

    
}