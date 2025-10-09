import React, { lazy } from "react";
import { Separator } from "../ui/separator";

const CountUp = lazy(() => import("react-countup"));

export default () => {
    const stats = [
        { label: "Tenaga Mengajar", value: 1280 },
        { label: "Peserta Didik", value: 5420 },
        { label: "Lembaga Pendidikan", value: 85 },
    ];

    return (
        <section
            className="relative bg-primary bg-center bg-fixed py-32"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=1920&q=80')",
            }}
        >
            <div className="absolute inset-0 bg-black/25" />
            <div className="relative mx-auto px-4 lg:px-0 text-center container">
                <div className="lg:flex gap-4 grid bg-background shadow-2xl py-12 rounded-2xl">
                    {stats.map((item, index) => (
                        <React.Fragment key={index}>
                            <div
                                data-aos="fade-up"
                                data-aos-delay={index * 250}
                                className="flex flex-col justify-center items-center p-6 rounded-2xl lg:w-4/12"
                            >
                                <CountUp
                                    start={0}
                                    end={item.value}
                                    duration={2.5}
                                    separator=","
                                    enableScrollSpy
                                    scrollSpyOnce
                                >
                                    {({ countUpRef }) => (
                                        <span
                                            ref={countUpRef}
                                            className="mb-2 font-bold text-5xl"
                                        />
                                    )}
                                </CountUp>
                                <p className="font-medium text-primary text-lg">{item.label}</p>
                            </div>
                            {index < stats.length - 1 && (
                                <Separator
                                    orientation="vertical"
                                    className="hidden lg:block h-32"
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
