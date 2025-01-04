import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlsTrainingComponent } from './bls-training/bls-training.component';
import { ElderlycareComponent } from './elderlycare/elderlycare.component';
import { InhousePatientCareComponent } from './inhouse-patient-care/inhouse-patient-care.component';
import { MedicalAstrologyComponent } from './medical-astrology/medical-astrology.component';
import { OverseasServicesComponent } from './overseas-services/overseas-services.component';
import { GeneralWellnessComponent } from './general-wellness/general-wellness.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { Component } from '@angular/core';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { GalleryComponent } from './gallery/gallery.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { ServiceComingsoonComponent } from './service-comingsoon/service-comingsoon.component';
import { PragnancyCareComponent } from './pragnancy-care/pragnancy-care.component';
import { ParentalCareComponent } from './parental-care/parental-care.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
import { CancellationPolicyComponent } from './cancellation-policy/cancellation-policy.component';
import { PostPregnancyComponent } from './post-pregnancy/post-pregnancy.component';
import { ContinuumCareComponent } from './continuum-care/continuum-care.component';
import { PregnancyPalnFirstComponent } from './pregnancy-paln-first/pregnancy-paln-first.component';
import { HomeCareComponent } from './home-care/home-care.component';
import { PhysiotheraphyComponent } from './physiotheraphy/physiotheraphy.component';
import { PregnancyPalnSecondComponent } from './pregnancy-paln-second/pregnancy-paln-second.component';
import { PregnancyPalnThirdComponent } from './pregnancy-paln-third/pregnancy-paln-third.component';
import { VirtualCareComponent } from './virtual-care/virtual-care.component';
import { CareGiverComponent } from './care-giver/care-giver.component';
import { ClinicalCareComponent } from './clinical-care/clinical-care.component';
import { RecoveryPlanComponent } from './recovery-plan/recovery-plan.component';
import { BlsFaqComponent } from './bls-faq/bls-faq.component';
import { ElderlyCareFaqComponent } from './elderly-care-faq/elderly-care-faq.component';
import { MedicalAstrologyFaqComponent } from './medical-astrology-faq/medical-astrology-faq.component';
import { PregnancyCareFaqComponent } from './pregnancy-care-faq/pregnancy-care-faq.component';
import { VirtualCarePalnComponent } from './virtual-care-paln/virtual-care-paln.component';
import { CaregiverCarePalnComponent } from './caregiver-care-paln/caregiver-care-paln.component';
import { ClinicalCarePalnComponent } from './clinical-care-paln/clinical-care-paln.component';
import { VirtualPhysiotherapyPlanComponent } from './virtual-physiotherapy-plan/virtual-physiotherapy-plan.component';
import { HomePhysiotherapyPlanComponent } from './home-physiotherapy-plan/home-physiotherapy-plan.component';
import { BasicPlanComponent } from './basic-plan/basic-plan.component';
import { StandardPlanComponent } from './standard-plan/standard-plan.component';
import { OptimaPlanComponent } from './optima-plan/optima-plan.component';
import { FirstAidComponent } from './first-aid/first-aid.component';
import { RoadSafetyComponent } from './road-safety/road-safety.component';
import { ElectricalSafetyComponent } from './electrical-safety/electrical-safety.component';
import { CompanionCareComponent } from './companion-care/companion-care.component';
import { ComprehensiveCareComponent } from './comprehensive-care/comprehensive-care.component';
import { LabTestComponent } from './lab-test/lab-test.component';
import { DoctorConsultationComponent } from './doctor-consultation/doctor-consultation.component';
import { OperativeCareComponent } from './operative-care/operative-care.component';
import { LabTestFaqComponent } from './lab-test-faq/lab-test-faq.component';
import { DoctorConsultantFaqComponent } from './doctor-consultant-faq/doctor-consultant-faq.component';
import { OperativeCareFaqComponent } from './operative-care-faq/operative-care-faq.component';
import { MedicalAstrologyConsultantComponent } from './medical-astrology-consultant/medical-astrology-consultant.component';
import { StrokeRehabilitationComponent } from './stroke-rehabilitation/stroke-rehabilitation.component';
export const appRoute: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home',
  },

  {
    path: 'safety-training',
    component: BlsTrainingComponent,
  },

  {
    path: 'first-aid',
    component: FirstAidComponent,
  },
  {
    path: 'road-safety',
    component: RoadSafetyComponent,
  },

  {
    path: 'electrical-safety',
    component: ElectricalSafetyComponent,
  },
  {
    path: 'companion-care',
    component: CompanionCareComponent,
  },
  {
    path: 'comprehensive-care',
    component: ComprehensiveCareComponent,
  },
  {
    path: 'recovery-plan',
    component: RecoveryPlanComponent,
  },

  {
    path: 'pregnancy-care',
    component: PragnancyCareComponent,
  },

  {
    path: 'pregnancy-first-plan',
    component: PregnancyPalnFirstComponent,
  },

  {
    path: 'virtual-care',
    component: VirtualCareComponent,
  },

  {
    path: 'care-giver',
    component: CareGiverComponent,
  },

  {
    path: 'clinical-care',
    component: ClinicalCareComponent,
  },

  {
    path: 'lab-test',
    component: LabTestComponent,
  },

  {
    path: 'lab-test-faq',
    component: LabTestFaqComponent,
  },

  {
    path: 'doctor-consultation',
    component: DoctorConsultationComponent,
  },

  {
    path: 'doctor-consultation-faq',
    component: DoctorConsultantFaqComponent,
  },

  {
    path: 'medical-astrology-consultant',
    component: MedicalAstrologyConsultantComponent,
  },

  {
    path: 'stroke-rehabilitation',
    component: StrokeRehabilitationComponent,
  },

  {
    path: 'operative-care',
    component: OperativeCareComponent,
  },

  {
    path: 'operative-care-faq',
    component: OperativeCareFaqComponent,
  },

  {
    path: 'pregnancy-second-plan',
    component: PregnancyPalnSecondComponent,
  },

  {
    path: 'pregnancy-third-plan',
    component: PregnancyPalnThirdComponent,
  },

  {
    path: 'basic-plan',
    component: BasicPlanComponent,
  },

  {
    path: 'standard-plan',
    component: StandardPlanComponent,
  },

  {
    path: 'optima-plan',
    component: OptimaPlanComponent,
  },

  {
    path: 'safety-faq',
    component: BlsFaqComponent,
  },

  {
    path: 'elderly-care-faq',
    component: ElderlyCareFaqComponent,
  },

  {
    path: 'medical-astrolgy-faq',
    component: MedicalAstrologyFaqComponent,
  },

  {
    path: 'pregnancy-care-faq',
    component: PregnancyCareFaqComponent,
  },

  {
    path: 'three-months-plan',
    component: PregnancyPalnFirstComponent,
  },

  {
    path: 'six-months-plan',
    component: PregnancyPalnSecondComponent,
  },

  {
    path: 'one-year-plan',
    component: PregnancyPalnThirdComponent,
  },

  {
    path: 'virtual-care-plan',
    component: VirtualCarePalnComponent,
  },

  {
    path: 'virtual-physiotherapy-plan',
    component: VirtualPhysiotherapyPlanComponent,
  },

  {
    path: 'home-physiotherapy-plan',
    component: HomePhysiotherapyPlanComponent,
  },

  {
    path: 'care-giver-plan',
    component: CaregiverCarePalnComponent,
  },

  {
    path: 'clinical-care-plan',
    component: ClinicalCarePalnComponent,
  },

  {
    path: 'parental-care',
    component: ParentalCareComponent,
  },

  {
    path: 'elderlycare',
    component: ElderlycareComponent,
  },

  {
    path: 'home-care',
    component: HomeCareComponent,
  },

  {
    path: 'physiotheraphy',
    component: PhysiotheraphyComponent,
  },

  {
    path: 'inhouse-patient-care',
    component: InhousePatientCareComponent,
  },

  {
    path: 'medical-astrology',
    component: MedicalAstrologyComponent,
  },

  {
    path: 'overseas-services',
    component: OverseasServicesComponent,
  },

  {
    path: 'general-wellness',
    component: GeneralWellnessComponent,
  },

  {
    path: 'about-us',
    component: AboutUsComponent,
  },

  {
    path: 'services',
    component: ServicesComponent,
  },

  {
    path: 'contact-us',
    component: ContactUsComponent,
  },

  {
    path: 'Gallery',
    component: GalleryComponent,
  },

  {
    path: 'roadmap',
    component: RoadmapComponent,
  },

  {
    path: 'service-comingsoon',
    component: ServiceComingsoonComponent,
  },

  {
    path: 'privacy-poliy',
    component: PrivacyPolicyComponent,
  },

  {
    path: 'terms-and-condition',
    component: TermConditionComponent,
  },

  {
    path: 'cancellation-policy',
    component: CancellationPolicyComponent,
  },

  {
    path: 'post-pregnancy',
    component: PostPregnancyComponent,
  },

  {
    path: 'term-condition',
    component: TermConditionComponent,
  },

  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
  },

  {
    path: 'continuum-care',
    component: ContinuumCareComponent,
  },
];
