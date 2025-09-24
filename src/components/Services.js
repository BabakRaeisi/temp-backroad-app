import { services } from "../Data";
import TitleSection from "./TitleSection";
import Service from "./Service";
function Services() {
  return (
    <section className="section services" id="services">
      <TitleSection title="our" subtitle="services" />
      <div className="section-center services-center">
        {services.map((service) => {
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
}
export default Services;
