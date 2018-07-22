export class Column
{
    identificator;
    field;
    header;
    frequency;

    constructor(
        identificator,
        field,
        header,
        frenquency?
    ) {
        this.identificator = identificator;
        this.field = field;
        this.header = header;
        this.frequency = frenquency;
    }
}
