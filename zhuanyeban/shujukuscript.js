// document.addEventListener('DOMContentLoaded', function () {
//   const tableCells = document.querySelectorAll('table.data-table tbody td');
//   tableCells.forEach(function (cell) {
//     cell.addEventListener('click', function () {
//       // 在这里可以添加跳转前的操作，例如确认提示
//       // if (confirm('确认跳转到检测页面？')) {
//       window.location.href = '分析.html'; // 替换为实际的检测页面路径
//       // }
//     });
//   });
// });


// document.addEventListener('DOMContentLoaded', function () {
//   const patientNameSearch = document.getElementById('patientNameSearch');
//   const searchButton = document.getElementById('searchButton');
//   const resetButton = document.getElementById('resetButton');
//   const dataTableBody = document.getElementById('dataTableBody');
//   const modifyButton = document.getElementById('modifyButton');

//   let originalRows = [];
//   const rows = dataTableBody.querySelectorAll('tr');
//   rows.forEach(row => {
//     originalRows.push(row.cloneNode(true));
//   });

//   searchButton.addEventListener('click', function () {
//     const searchTerm = patientNameSearch.value.toLowerCase();
//     const rows = dataTableBody.querySelectorAll('tr');
//     rows.forEach((row, index) => {
//       const patientNameCell = row.querySelector('[data-field="patientName"]');
//       if (patientNameCell) {
//         const patientName = patientNameCell.textContent.toLowerCase();
//         if (patientName.includes(searchTerm)) {
//           row.style.display = 'table-row';
//         } else {
//           row.style.display = 'none';
//         }
//       }
//     });
//   });

//   resetButton.addEventListener('click', function () {
//     patientNameSearch.value = '';
//     const rows = dataTableBody.querySelectorAll('tr');
//     rows.forEach(row => {
//       row.style.display = 'table-row';
//     });
//   });

//   modifyButton.addEventListener('click', function () {
//     const rows = dataTableBody.querySelectorAll('tr');
//     rows.forEach(row => {
//       const cells = row.querySelectorAll('td');
//       cells.forEach(cell => {
//         const originalText = cell.textContent;
//         const input = document.createElement('input');
//         input.type = 'text';
//         input.value = originalText;
//         input.style.width = '100%';
//         input.style.boxSizing = 'border-box';
//         input.style.border = '1px solid #ccc';
//         input.style.padding = '5px';
//         input.style.margin = '0';
//         input.style.borderRadius = '3px';
//         input.style.outline = 'none';
//         input.style.backgroundColor = 'white';
//         input.focus();
//         cell.textContent = '';
//         cell.appendChild(input);
//         input.addEventListener('blur', function () {
//           const newText = input.value;
//           cell.textContent = newText;
//         });
//         input.addEventListener('keydown', function (e) {
//           if (e.key === 'Enter') {
//             const newText = input.value;
//             cell.textContent = newText;
//             input.blur();
//           }
//         });
//       });
//     });
//   });
// });


document.addEventListener('DOMContentLoaded', function () {
  const patientNameSearch = document.getElementById('patientNameSearch');
  const searchButton = document.getElementById('searchButton');
  const resetButton = document.getElementById('resetButton');
  const dataTableBody = document.getElementById('dataTableBody');
  const modifyButton = document.getElementById('modifyButton');

  // 保存原始数据，用于重置
  let originalRows = [];
  const rows = dataTableBody.querySelectorAll('tr');
  rows.forEach(row => {
    originalRows.push(row.cloneNode(true));
  });

  // 搜索功能
  searchButton.addEventListener('click', function () {
    const searchTerm = patientNameSearch.value.toLowerCase();
    const rows = dataTableBody.querySelectorAll('tr');
    rows.forEach((row, index) => {
      const patientNameCell = row.querySelector('[data-field="patientName"]');
      if (patientNameCell) {
        const patientName = patientNameCell.textContent.toLowerCase();
        if (patientName.includes(searchTerm)) {
          row.style.display = 'table-row';
        } else {
          row.style.display = 'none';
        }
      }
    });
  });

  // 重置功能
  resetButton.addEventListener('click', function () {
    patientNameSearch.value = '';
    const rows = dataTableBody.querySelectorAll('tr');
    rows.forEach((row, index) => {
      dataTableBody.replaceChild(originalRows[index].cloneNode(true), row);
    });
  });

  // 修改功能
  modifyButton.addEventListener('click', function () {
    const rows = dataTableBody.querySelectorAll('tr');
    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      cells.forEach(cell => {
        const originalText = cell.textContent;
        const input = document.createElement('input');
        input.type = 'text';
        input.value = originalText;
        input.style.width = '100%';
        input.style.boxSizing = 'border-box';
        input.style.border = '1px solid #ccc';
        input.style.padding = '5px';
        input.style.margin = '0';
        input.style.borderRadius = '3px';
        input.style.outline = 'none';
        input.style.backgroundColor = 'white';
        cell.textContent = '';
        cell.appendChild(input);
        input.focus();

        input.addEventListener('blur', function () {
          const newText = input.value;
          cell.textContent = newText;
        });

        input.addEventListener('keydown', function (e) {
          if (e.key === 'Enter') {
            const newText = input.value;
            cell.textContent = newText;
            input.blur();
          }
        });
      });
    });
  });
});

// 添加功能
addButton.addEventListener('click', function () {
  const newRow = document.createElement('tr');
  const cellCount = dataTableBody.rows[0].cells.length;
  for (let i = 0; i < cellCount - 1; i++) {
    const newCell = document.createElement('td');
    if (i === 0) {
      newCell.textContent = dataTableBody.rows.length + 1;
    } else {
      newCell.textContent = '';
    }
    newRow.appendChild(newCell);
  }
  const deleteCell = document.createElement('td');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '删除';
  deleteButton.classList.add('delete-row');
  deleteCell.appendChild(deleteButton);
  newRow.appendChild(deleteCell);
  dataTableBody.appendChild(newRow);

  // 为新添加的删除按钮添加事件监听器
  deleteButton.addEventListener('click', function () {
    dataTableBody.removeChild(newRow);
  });
});

// 删除选中行功能
dataTableBody.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete-row')) {
    const row = e.target.parentNode.parentNode;
    dataTableBody.removeChild(row);
  }
});

// 删除所有选中行功能（这里简单实现为删除所有行，可根据需求修改为有选中标记的行）
deleteAllButton.addEventListener('click', function () {
  while (dataTableBody.firstChild) {
    dataTableBody.removeChild(dataTableBody.firstChild);
  }
});