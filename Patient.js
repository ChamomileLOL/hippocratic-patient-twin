const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sarsCov2Status: { type: String, default: "Positive" },
    // Measuring "Warmth and Sympathy" as per Source 21
    clinicalSympathyIndex: { type: Number, min: 0, max: 100 },
    // Including "Economic Stability" as per Source 29
    economicStabilityImpact: { type: Boolean, default: true },
    // Safeguard against "Deadly Drugs" as per Source 7
    medicationHistory: [{
        drugName: String,
        isDeadly: { type: Boolean, default: false } // Logic to prevent "harm and injustice"
    }]
});

module.exports = mongoose.model('Patient', PatientSchema);
