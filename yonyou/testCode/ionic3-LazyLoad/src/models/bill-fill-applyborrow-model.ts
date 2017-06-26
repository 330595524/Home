
/**
 * Created by wuyanjiang on 2016/12/6.
 */


export class BillFillBorrowModel {
  name: string;

  constructor(theName: string) { this.name = theName; }

    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }

}
