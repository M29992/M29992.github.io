import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from './data.service';

describe('DataService', () => {
  let service: DataService;
  let httpMock: HttpTestingController;
  const mockResponse = {
    workExperience: [
      {
        title: 'Full Stack Software Engineer / Team Lead',
        company: 'ParentPay Ltd',
        startDate: '2021',
        endDate: 'Present',
        responsibilities: [
          'Developed and maintained applications using C#, JavaScript, Angular, Bootstrap, and CSS within an Agile environment.',
          'Designed and implemented new microservices and APIs, adhering to SOLID principles.',
          'Acted as a Scrum Master, ensuring adherence to Agile principles and facilitating sprint ceremonies.',
        ],
        technologies: [
          'C#',
          'JavaScript',
          'Angular',
          'Bootstrap',
          'CSS',
          'TeamCity',
          'Octopus Deploy',
          'SQL',
          'Microsoft SQL Server'
        ]
      }
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve work experience from the API via GET', () => {
    service.getData().subscribe((data) => {
      expect(data.workExperience.length).toBeGreaterThan(0);
      expect(data).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });

  it('should handle error response', () => {
    const mockErrorResponse = { status: 500, statusText: 'Server Error' };
    const mockErrorMessage = 'Something went wrong; please try again later.';

    service.getData().subscribe(
      () => fail('expected an error, not work experience'),
      (error: string) => {
        expect(error).toBe(mockErrorMessage);
      }
    );

    const req = httpMock.expectOne(service['apiUrl']);
    req.flush('error', mockErrorResponse);
  });
});
