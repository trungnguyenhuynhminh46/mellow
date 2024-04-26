export default class RGB {
  private _r: number
  private _g: number
  private _b: number

  constructor(r: number = 0, g: number = 0, b: number = 0) {
    this._r = r
    this._g = g
    this._b = b
  }

  get r(): number {
    return this._r
  }

  set r(value: number) {
    this._r = value
  }

  get g(): number {
    return this._g
  }

  set g(value: number) {
    this._g = value
  }

  get b(): number {
    return this._b
  }

  set b(value: number) {
    this._b = value
  }

  toString(): string {
    return `rgb(${this._r},${this._g},${this._b})`
  }
}
