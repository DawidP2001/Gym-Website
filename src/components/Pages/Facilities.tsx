import React from "react";

interface FacilitiesProps {
    className?: string;
}

class Facilities extends React.Component<FacilitiesProps> {
    render() {
        return (
            <section className={`min-h-screen py-16 px-4 ${this.props.className || ''}`}>
            </section>
        );
    }
}

export default Facilities;