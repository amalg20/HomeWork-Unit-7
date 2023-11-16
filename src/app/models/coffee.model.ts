export class coffee {
    public get contributedBy(): string {
        return this._contributedBy;
    }
    public set contributedBy(value: string) {
        this._contributedBy = value;
    }
    public get strengthLevel(): number {
        return this._strengthLevel;
    }
    public set strengthLevel(value: number) {
        this._strengthLevel = value;
    }
    public get roasterTips(): string {
        return this._roasterTips;
    }
    public set roasterTips(value: string) {
        this._roasterTips = value;
    }
    public get firstRoasted(): string {
        return this._firstRoasted;
    }
    public set firstRoasted(value: string) {
        this._firstRoasted = value;
    }
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }
    public get tagline(): string {
        return this._tagline;
    }
    public set tagline(value: string) {
        this._tagline = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    constructor(
        private _name: string,
        private _tagline: string,
        private _description: string,
        private _firstRoasted: string,
        private _roasterTips: string,
        private _strengthLevel: number,
        private _contributedBy: string,

    ) { }

}