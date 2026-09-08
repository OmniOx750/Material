/* MEKICS Material frontend performance boost */
(() => {
  if (typeof render !== 'function' || typeof filesForParent !== 'function') return;

  let fileArrayRef = null;
  let fileMap = new Map();

  function ensureFileIndex() {
    if (fileArrayRef === state.files) return;
    fileArrayRef = state.files;
    fileMap = new Map();
    state.files.forEach(file => {
      const key = String(file.toolId);
      if (!fileMap.has(key)) fileMap.set(key, []);
      fileMap.get(key).push(file);
    });
    fileMap.forEach(list => list.sort((a,b) =>
      (Number(b.isCurrent) - Number(a.isCurrent)) || String(b.uploadedAt || '').localeCompare(String(a.uploadedAt || ''))
    ));
  }

  filesForToolId = function (toolId, language = '전체') {
    ensureFileIndex();
    return filterFilesByLanguage([...(fileMap.get(String(toolId)) || [])], language);
  };

  filesForParent = function (parent, viewOnly = false, language = '전체') {
    ensureFileIndex();
    const ids = fileScopeIds(parent, viewOnly, language);
    const result = [];
    ids.forEach(id => {
      const list = fileMap.get(String(id));
      if (list?.length) result.push(...list);
    });
    result.sort((a,b) =>
      (Number(b.isCurrent) - Number(a.isCurrent)) || String(b.uploadedAt || '').localeCompare(String(a.uploadedAt || ''))
    );
    return filterFilesByLanguage(result, language);
  };

  const baseRender = render;
  render = function () {
    ensureFileIndex();
    return baseRender();
  };

  const search = document.getElementById('searchInput');
  if (search) {
    search.oninput = event => {
      state.search = event.target.value;
      clearTimeout(search._mekRenderTimer);
      search._mekRenderTimer = setTimeout(renderToolSections, 120);
    };
  }

  document.documentElement.classList.add('mek-performance-mode');
})();
