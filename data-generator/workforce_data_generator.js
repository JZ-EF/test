// Generate and export workforce data as CSV
function generateWorkforceCSV() {
    const roles = ['Senior Support Agent', 'Support Agent', 'Junior Support Agent', 'Team Lead', 'Support Specialist'];
    const departments = ['Technical Support', 'Customer Success', 'Billing Support', 'Product Support'];
    const locations = ['San Francisco, CA', 'Austin, TX', 'New York, NY', 'Denver, CO', 'Remote'];
    const employmentTypes = ['Full-time', 'Part-time', 'Contractor'];
    const shifts = ['Morning', 'Afternoon', 'Evening', 'Night'];
    
    const agents = [];
    
    for (let i = 1; i <= 100; i++) {
        const tenure = Math.random() * 8;
        const age = 22 + Math.random() * 18;
        const role = roles[Math.floor(Math.random() * roles.length)];
        const isHighPerformer = Math.random() > 0.7;
        const location = locations[Math.floor(Math.random() * locations.length)];
        
        // Base salary calculation
        const baseSalaries = {
            'Junior Support Agent': 45000,
            'Support Agent': 55000,
            'Senior Support Agent': 70000,
            'Support Specialist': 65000,
            'Team Lead': 85000
        };
        
        const locationMultipliers = {
            'San Francisco, CA': 1.4,
            'New York, NY': 1.3,
            'Denver, CO': 1.1,
            'Austin, TX': 1.05,
            'Remote': 1.0
        };
        
        const baseSalary = Math.round(baseSalaries[role] * locationMultipliers[location] * (0.9 + Math.random() * 0.2));
        
        const agent = {
            agent_id: `CS${String(i).padStart(3, '0')}`,
            name: generateName(),
            age: Math.round(age),
            gender: Math.random() > 0.52 ? 'Female' : 'Male',
            tenure_years: Math.round(tenure * 10) / 10,
            role: role,
            department: departments[Math.floor(Math.random() * departments.length)],
            employment_type: employmentTypes[Math.floor(Math.random() * employmentTypes.length)],
            location: location,
            shift: shifts[Math.floor(Math.random() * shifts.length)],
            status: Math.random() > 0.05 ? 'Active' : 'Inactive',
            
            // Compensation
            base_salary: baseSalary,
            bonus_eligible: Math.random() > 0.3 ? 'Yes' : 'No',
            overtime_hours_monthly: Math.round(Math.random() * 20),
            
            // Performance Metrics
            performance_score: Math.round((isHighPerformer ? 3.5 + Math.random() * 1.5 : 2 + Math.random() * 2) * 10) / 10,
            csat_score: Math.round((4.2 + Math.random() * 0.8) * 10) / 10,
            nps_score: Math.round((7 + Math.random() * 3) * 10) / 10,
            ces_score: Math.round((2 + Math.random() * 2) * 10) / 10,
            aht_minutes: Math.round((8 + Math.random() * 12) * 10) / 10,
            fcr_rate: Math.round((0.65 + Math.random() * 0.25) * 100) / 100,
            ticket_reopen_rate: Math.round((0.05 + Math.random() * 0.15) * 100) / 100,
            escalation_rate: Math.round((0.1 + Math.random() * 0.2) * 100) / 100,
            
            // Skills (1-5 scale)
            skill_crm_software: Math.round(1 + Math.random() * 4),
            skill_technical_troubleshooting: Math.round(1 + Math.random() * 4),
            skill_product_knowledge: Math.round(1 + Math.random() * 4),
            skill_communication: Math.round(1 + Math.random() * 4),
            skill_escalation_mgmt: Math.round(1 + Math.random() * 4),
            skill_data_analysis: Math.round(1 + Math.random() * 4),
            skill_multichannel_support: Math.round(1 + Math.random() * 4),
            skill_documentation: Math.round(1 + Math.random() * 4),
            
            // Languages (1-5 proficiency)
            lang_english: 5, // All agents proficient in English
            lang_spanish: Math.random() > 0.7 ? Math.round(2 + Math.random() * 3) : 0,
            lang_french: Math.random() > 0.85 ? Math.round(2 + Math.random() * 3) : 0,
            lang_mandarin: Math.random() > 0.9 ? Math.round(2 + Math.random() * 3) : 0,
            
            // Engagement & Risk
            engagement_score: Math.round((3 + Math.random() * 2) * 10) / 10,
            attrition_risk: isHighPerformer ? 'Low' : ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)],
            disciplinary_actions: Math.random() > 0.85 ? Math.floor(Math.random() * 3) : 0,
            
            // Workload & Productivity
            tickets_per_day: Math.round(15 + Math.random() * 25),
            avg_resolution_time_hours: Math.round((2 + Math.random() * 6) * 10) / 10,
            chat_percent: Math.round(20 + Math.random() * 40),
            email_percent: Math.round(20 + Math.random() * 40),
            phone_percent: Math.round(10 + Math.random() * 30),
            social_percent: Math.round(0 + Math.random() * 15),
            
            // Training & Development
            training_completion_rate: Math.round((0.7 + Math.random() * 0.3) * 100) / 100,
            certifications_count: Math.floor(Math.random() * 4),
            last_training_date: generateRecentDate(),
            
            // AI/Automation
            ai_assisted_tickets_percent: Math.round((0.2 + Math.random() * 0.4) * 100) / 100,
            automation_comfort_level: Math.round(2 + Math.random() * 3),
            ai_suitable_tasks_count: 2 + Math.floor(Math.random() * 5),
            
            // Collaboration
            internal_messages_daily: Math.round(5 + Math.random() * 15),
            knowledge_sharing_score: Math.round((2 + Math.random() * 3) * 10) / 10,
            mentoring_others: Math.random() > 0.7 ? 'Yes' : 'No',
            
            // Diversity & Inclusion
            diversity_group: Math.random() > 0.6 ? generateDiversityGroup() : 'None',
            inclusion_survey_score: Math.round((3.5 + Math.random() * 1.5) * 10) / 10,
            
            // Historical Performance (last 3 months)
            csat_trend: generateTrend(),
            ticket_volume_trend: generateTrend(),
            performance_trend: generateTrend()
        };
        
        agents.push(agent);
    }
    
    return agents;
}

function generateName() {
    const firstNames = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Avery', 'Quinn', 'Sage', 'Drew',
                       'Emma', 'Liam', 'Sophia', 'Noah', 'Isabella', 'Mason', 'Ava', 'William', 'Mia', 'James',
                       'Charlotte', 'Benjamin', 'Amelia', 'Lucas', 'Harper', 'Henry', 'Evelyn', 'Sebastian', 'Ella', 'Owen'];
    const lastNames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 
                      'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas', 'Taylor', 'Lee', 
                      'White', 'Harris', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Perez', 'Hall', 'Young', 'Allen'];
    
    return `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
}

function generateRecentDate() {
    const now = new Date();
    const daysAgo = Math.floor(Math.random() * 90); // Last 90 days
    const date = new Date(now.getTime() - (daysAgo * 24 * 60 * 60 * 1000));
    return date.toISOString().split('T')[0];
}

function generateDiversityGroup() {
    const groups = ['Women in Tech', 'LGBTQ+ Alliance', 'Veterans Network', 'Cultural Diversity Group', 
                    'Young Professionals', 'Accessibility Champions', 'Working Parents Network'];
    return groups[Math.floor(Math.random() * groups.length)];
}

function generateTrend() {
    const trends = ['Improving', 'Stable', 'Declining', 'Volatile'];
    return trends[Math.floor(Math.random() * trends.length)];
}

// Generate the data
const workforceData = generateWorkforceCSV();

// Convert to CSV
function arrayToCSV(data) {
    if (!data.length) return '';
    
    const headers = Object.keys(data[0]);
    const csvRows = [headers.join(',')];
    
    for (const row of data) {
        const values = headers.map(header => {
            const value = row[header];
            if (typeof value === 'string' && value.includes(',')) {
                return `"${value}"`;
            }
            return value;
        });
        csvRows.push(values.join(','));
    }
    
    return csvRows.join('\n');
}

const csvData = arrayToCSV(workforceData);

// Display summary
console.log(`Generated ${workforceData.length} customer support agents`);
console.log('Sample data structure:');
console.table(workforceData.slice(0, 3));

// Download functionality
const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
const link = document.createElement('a');
if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'customer_support_workforce_data.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

console.log('CSV file should download automatically');
console.log('File name: customer_support_workforce_data.csv');

// Return the CSV data for copy/paste if download doesn't work
console.log('\nIf download fails, copy the CSV data below:');
console.log('--- CSV DATA START ---');
console.log(csvData);
console.log('--- CSV DATA END ---');
