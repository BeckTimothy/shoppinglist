window.onload = function () {
	initShoppingList();
};

function initShoppingList() {
	let form = document.getElementById("item-form");
	form.addEventListener("submit", (event) => {
		handleItemForm(event, form);
	});
}

function handleItemForm(event, formRef) {
	if(event.preventDefault) {
		event.preventDefault();
	}
	addItemToShoppingList();
	formRef.reset();
	return false;
}

function addItemToShoppingList() {
	let itemName = document.getElementById("item-name");
	let amount = document.getElementById("item-amount");
	let id = getRandomInt(0, 10000000);

	//Creates list item and appends to page.
	let itemHtml = createListItemHtml(itemName.value, amount.value, id);
	let itemListRef = document.getElementById("shopping-list");
	itemListRef.insertAdjacentHTML("afterend", itemHtml);

	setDeleteButtonEvent(id);
}

function setDeleteButtonEvent(id) {
	let deleteButton = document.getElementById("button"+id);
	deleteButton.addEventListener("click", () => {
		removeListItem(id);
	});
}

function createListItemHtml (itemName, amount, id) {
	return `<li id="item${id}">
				${itemName} - ${amount}
				<button id="button${id}" type="button">Delete  Item</button>
			</li>`
}

function removeListItem(id) {
	let listItem = document.getElementById("item"+id);
	listItem.parentNode.removeChild(listItem);
}

function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}