import { ITypeLineDTO } from "@/shared/UI/TypeLine/TypeLineDTO";

export class TypeLineData {
    
    constructor(private typeLineData: ITypeLineDTO) {

    }

    public static textToTypeLineDTO(text: string) {
        return {
            prev: "",
            next: text
        }
    }

    public static applyInput(dto: ITypeLineDTO) {
        const s = dto.next[0];
        const nl = dto.next.length;
        const ndto = {
            prev: dto.prev + s,
            next: dto.next.slice(1, nl)
        };

        return ndto;
    }


    public checkNext(value: string) {
        if(value === this.typeLineData.next[0]) {
            return true;
        }
    }

    public getDTO() {
        return {...this.typeLineData};
    }

    public static getNext(dto: ITypeLineDTO) {
        return dto.next[0];
    }
}