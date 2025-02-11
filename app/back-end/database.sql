CREATE TABLE IF NOT EXISTS label (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    productName TEXT NOT NULL,
    productSubtitle TEXT NOT NULL,
    productAmount INT NULL,
    productWeight INT NULL,
    barcode TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS test (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    description TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

INSERT INTO test (description)
VALUES 
('Nu testar vi den')
;

INSERT INTO label (productName, productSubtitle, productAmount, productWeight, barcode)
VALUES 
('Pizzabotten', ' - Fryst', 4, 200, 'EAN13,7350005720056')
;