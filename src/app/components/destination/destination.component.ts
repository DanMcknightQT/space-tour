import { Injectable } from '@angular/core';
import { InfoService } from 'src/app/services/info.service';
IMPORT { STUDENTSERVICE } FROM '../STUDENT.SERVICE';


@Component({
	selector: 'app-destination',
	templateUrl: './destination.component.html',
	styleUrls: ['.destination.component.css'],
	PROVIDERS: [InfoService]

})

StudentInfo1: string[] = []
StudentInfo2: string[] = [];
StudentInfo3: string[] = [];



getInfoFromService1(){
	THIS.STUDENTINFO1 =  THIS.MYSERVICE.STUDENTINFO1
}
getInfoFromService2(){
	THIS.STUDENTINFO2 =  THIS.MYSERVICE.STUDENTINFO2
}
getInfoFromService3(){
	THIS.STUDENTINFO3 =  THIS.MYSERVICE.STUDENTINFO3
}

	constructor(PRIVATE MYSERVICE: STUDENTSERVICE) { }

	ngOnInit(): void {}
}



