import Buyable from './Buyable'

export default class MusicAlbum implements Buyable {
    constructor (
        readonly id: number,
        readonly name: string,
        readonly authr: string,
        readonly price: number
    ) {}
}