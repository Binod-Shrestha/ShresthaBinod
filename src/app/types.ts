export interface Project{
  id: string,
  name: string,
  description: string,
  completed: number,
  image: string,
}
export interface Course{
  id: string,
  name: string,
  description: string,
  completed: number,
  image: string,
}
export interface Jobs{
  id: string,
  company: string,
  job_title: string,
  job_description: string,
  start_year:number,
  start_month: string,
  end_year: number,
  end_month: string,
  image: string,

}
export interface Volunteer{
  id: string,
  organization: string,
  event: string,
  description: string,
  start_year: number,
  end_year: number,
  start_month: string,
  end_month: string,
  image:string,
}
