import { TestBed } from "@angular/core/testing";
import { any } from "cypress/types/bluebird";
import { CalculatorService } from "./calculator.service";
import { LoggerService } from "./logger.service";

describe("CalculatorService", () => {

  let calculator: CalculatorService,
      loggerSpy: any;

  beforeEach(() => {
    loggerSpy = jasmine.createSpyObj('LoggerService', ["log"]);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {provide: LoggerService, useValue: loggerSpy}
      ]
    });

    calculator = TestBed.inject(CalculatorService);
  });

  it("should add two numbers", () => {
    
    const result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1)
  });

  it("should substract two numbers", () => {
    
    const result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });
});
