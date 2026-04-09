require('dotenv').config();
const express = require('express');
const cors = require('cors'); 
const mongoose = require('mongoose');
const connectDB = require('./db');
const Patient = require('./Patient');

const app = express();

// MIDDLEWARE: "I will call in my colleagues"
app.use(cors()); 
app.use(express.json());

// INITIALIZE: "I will fulfill according to my ability and judgment"
connectDB();

/**
 * THE HOLISTIC SANCTUARY ROUTE
 * Merging clinical data, social support, and the Sacred Key.
 */
app.post('/holistic-treatment', async (req, res) => {
    const { name, patientId, familySupportStatus, keyOfHoliness } = req.body;
    const oathHash = "1964_LASAGNA_TUFTS";

    // VITAL CHECK 1: The Sacred Key
    if (keyOfHoliness !== oathHash) {
        console.error("ALARM: Unauthorized access attempt. Integrity compromised.");
        return res.status(403).send("I will keep them from harm and injustice. Access Denied.");
    }

    // VITAL CHECK 2: Holistic Care (Social Determinants of Health)
    if (!familySupportStatus) {
        return res.status(202).json({ 
            message: "Clinical action paused: Social support coordination required for family stability." 
        });
    }

    try {
        /**
         * THE SURGICAL UPSERT
         * We search by 'name' to avoid ID-related conflicts in a fresh database.
         * 'upsert: true' creates the patient if they do not exist.
         */
        const treatedPatient = await Patient.findOneAndUpdate(
            { name: name }, 
            { 
                patientId: patientId, 
                status: "Caring Initiated", 
                sarsCov2Status: "Positive",
                viralLoad: 0 // Providing a default value to satisfy Schema constraints
            },
            { 
                new: true, 
                upsert: true, 
                runValidators: true // Ensuring the "DNA" of the data is valid
            } 
        );

        console.log(`SANCTUARY UPDATE: Patient ${name} has been admitted.`);
        
        res.status(201).json({
            message: "Treatment successfully initiated in the Open Sanctuary.",
            patient: treatedPatient
        });

    } catch (error) {
        // "I will not be ashamed to say 'I know not'"
        console.error("CRITICAL CLINICAL FAILURE:", error.message);
        
        res.status(500).json({
            error: "Medical skill gap detected.",
            details: error.message,
            advice: "Check the Patient Schema for required fields (e.g., viralLoad)."
        });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`--- COVENANT ACTIVE ---`);
    console.log(`Physician listening on Port ${PORT}`);
    console.log(`-----------------------`);
});