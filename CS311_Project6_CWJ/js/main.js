document.addEventListener('DOMContentLoaded', function () {
   
});

function toggleAssetSection(assetType) {
    hideAllAssetSections();

    const assetSection = document.getElementById(`${assetType}Section`);
    if (assetSection) {
        assetSection.classList.add('show');

        const textboxContainers = assetSection.querySelectorAll('.textbox-container');
        textboxContainers.forEach(container => {
            container.style.display = 'block';
        });
    }
}

function hideAllAssetSections() {
    const assetSections = document.querySelectorAll('.asset-section');
    assetSections.forEach(section => {
        section.classList.remove('show');

        const textboxContainers = section.querySelectorAll('.textbox-container');
        textboxContainers.forEach(container => {
            container.style.display = 'none';
        });
    });
}

function calculateSectionTotal(assetType, inputIds) {
    let total = 0;
    inputIds.forEach(inputId => {
        const value = parseFloat(document.getElementById(inputId).value) || 0;
        total += value;
    });
    return total;
}

function calculateTotal() {
    const totalCurrentAssets = calculateSectionTotal('currentAssets', ['currentCash', 'currentInventory', 'currentSupplies', 'currentTemporaryInvestments']);
    document.getElementById('totalCurrentAssets').value = totalCurrentAssets.toFixed(2);

    const totalInvestmentProperty = calculateSectionTotal('investmentProperty', ['land', 'buildingAndImprovements', 'equipment', 'temporaryInvestments2']);
    document.getElementById('totalInvestmentProperty').value = totalInvestmentProperty.toFixed(2);

    const totalIntangibleAssets = calculateSectionTotal('intangibleAssets', ['tradeNames', 'goodwill']);
    document.getElementById('totalIntangibleAssets').value = totalIntangibleAssets.toFixed(2);

    const totalCurrentLiabilities = calculateSectionTotal('currentLiabilities', ['accountPayable', 'notesPayable', 'interestPayable', 'wagesPayable', 'accruedExpenses']);
    document.getElementById('totalCurrentLiabilities').value = totalCurrentLiabilities.toFixed(2);

 
    const totalLiabilities = totalCurrentLiabilities; 
    document.getElementById('totalLiabilities').value = totalLiabilities.toFixed(2);


    const totalAssets = totalCurrentAssets + totalInvestmentProperty + totalIntangibleAssets;
    const totalPosition = totalAssets - totalLiabilities;
    document.getElementById('totalAssets').value = totalAssets.toFixed(2);
    document.getElementById('totalPosition').value = totalPosition.toFixed(2);
}
