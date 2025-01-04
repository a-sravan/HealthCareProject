import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule } from 'swiper/angular';

import { appRoute } from './route';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BlsTrainingComponent } from './bls-training/bls-training.component';
import { ElderlycareComponent } from './elderlycare/elderlycare.component';
import { InhousePatientCareComponent } from './inhouse-patient-care/inhouse-patient-care.component';
import { MedicalAstrologyComponent } from './medical-astrology/medical-astrology.component';
import { OverseasServicesComponent } from './overseas-services/overseas-services.component';
import { GeneralWellnessComponent } from './general-wellness/general-wellness.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServicesComponent } from './services/services.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { GallerySliderComponent } from './gallery-slider/gallery-slider.component';
import { RoadmapComponent } from './roadmap/roadmap.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServiceComingsoonComponent } from './service-comingsoon/service-comingsoon.component';
import { PragnancyCareComponent } from './pragnancy-care/pragnancy-care.component';
import { ParentalCareComponent } from './parental-care/parental-care.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermConditionComponent } from './term-condition/term-condition.component';
import { CancellationPolicyComponent } from './cancellation-policy/cancellation-policy.component';
import { PostPeagnancyComponent } from './post-peagnancy/post-peagnancy.component';
import { PostPregnancyComponent } from './post-pregnancy/post-pregnancy.component';
import { ContinuumCareComponent } from './continuum-care/continuum-care.component';
import { PregnancyPalnFirstComponent } from './pregnancy-paln-first/pregnancy-paln-first.component';
import { PregnancyPalnSecondComponent } from './pregnancy-paln-second/pregnancy-paln-second.component';
import { PregnancyPalnThirdComponent } from './pregnancy-paln-third/pregnancy-paln-third.component';
import { HomeCareComponent } from './home-care/home-care.component';
import { PhysiotheraphyComponent } from './physiotheraphy/physiotheraphy.component';
import { VirtualCareComponent } from './virtual-care/virtual-care.component';
import { ClinicalCareComponent } from './clinical-care/clinical-care.component';
import { CareGiverComponent } from './care-giver/care-giver.component';
import { RecoveryPlanComponent } from './recovery-plan/recovery-plan.component';
import { ElderlyCareFaqComponent } from './elderly-care-faq/elderly-care-faq.component';
import { PregnancyCareFaqComponent } from './pregnancy-care-faq/pregnancy-care-faq.component';
import { MedicalAstrologyFaqComponent } from './medical-astrology-faq/medical-astrology-faq.component';
import { VirtualCarePalnComponent } from './virtual-care-paln/virtual-care-paln.component';
import { ClinicalCarePalnComponent } from './clinical-care-paln/clinical-care-paln.component';
import { CaregiverCarePalnComponent } from './caregiver-care-paln/caregiver-care-paln.component';
import { VirtualPhysiotherapyPlanComponent } from './virtual-physiotherapy-plan/virtual-physiotherapy-plan.component';
import { HomePhysiotherapyPlanComponent } from './home-physiotherapy-plan/home-physiotherapy-plan.component';
import { BasicPlanComponent } from './basic-plan/basic-plan.component';
import { StandardPlanComponent } from './standard-plan/standard-plan.component';
import { OptimaPlanComponent } from './optima-plan/optima-plan.component';
import { FirstAidComponent } from './first-aid/first-aid.component';
import { RoadSafetyComponent } from './road-safety/road-safety.component';
import { ElectricalSafetyComponent } from './electrical-safety/electrical-safety.component';
import { ComprehensiveCareComponent } from './comprehensive-care/comprehensive-care.component';
import { CompanionCareComponent } from './companion-care/companion-care.component';
import { LabTestComponent } from './lab-test/lab-test.component';
import { DoctorConsultationComponent } from './doctor-consultation/doctor-consultation.component';
import { OperativeCareComponent } from './operative-care/operative-care.component';
import { OperativeCareFaqComponent } from './operative-care-faq/operative-care-faq.component';
import { DoctorConsultantFaqComponent } from './doctor-consultant-faq/doctor-consultant-faq.component';
import { LabTestFaqComponent } from './lab-test-faq/lab-test-faq.component';
import { MedicalAstrologyConsultantComponent } from './medical-astrology-consultant/medical-astrology-consultant.component';
import { StrokeRehabilitationComponent } from './stroke-rehabilitation/stroke-rehabilitation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BlsTrainingComponent, ElderlycareComponent, InhousePatientCareComponent, MedicalAstrologyComponent, OverseasServicesComponent, GeneralWellnessComponent, AboutUsComponent, ServicesComponent, ContactUsComponent, GallerySliderComponent, RoadmapComponent, GalleryComponent, ServiceComingsoonComponent, PragnancyCareComponent, ParentalCareComponent, PrivacyPolicyComponent, TermConditionComponent, CancellationPolicyComponent, PostPeagnancyComponent, PostPregnancyComponent, ContinuumCareComponent, PregnancyPalnFirstComponent, PregnancyPalnSecondComponent, PregnancyPalnThirdComponent, HomeCareComponent, PhysiotheraphyComponent, VirtualCareComponent, ClinicalCareComponent, CareGiverComponent, RecoveryPlanComponent, ElderlyCareFaqComponent, PregnancyCareFaqComponent, MedicalAstrologyFaqComponent, VirtualCarePalnComponent, ClinicalCarePalnComponent, CaregiverCarePalnComponent, VirtualPhysiotherapyPlanComponent, HomePhysiotherapyPlanComponent, BasicPlanComponent, StandardPlanComponent, OptimaPlanComponent, FirstAidComponent, RoadSafetyComponent, ElectricalSafetyComponent, ComprehensiveCareComponent, CompanionCareComponent, LabTestComponent, DoctorConsultationComponent, OperativeCareComponent, OperativeCareFaqComponent, DoctorConsultantFaqComponent, LabTestFaqComponent, MedicalAstrologyConsultantComponent, StrokeRehabilitationComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    RouterModule.forRoot(appRoute),
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgbModalModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
