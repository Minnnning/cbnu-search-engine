import { boardTree } from "@shared/board-tree/board-tree.generated";

const script = {
  url: "https://nursing.chungbuk.ac.kr/?pg_idx=183",
  site_id: boardTree.전공.의과대학.간호학과.공지사항.id,
  site: "간호학과",
  category: "공지사항",
  noticeListSelector: `.dambbs_list tbody tr`,
  noticeContentsSelector: ".dambbs_body",
  getNoticeList() {
    const list = document.querySelectorAll(this.noticeListSelector);
    return Array.from(list)
      .map((item) => {
        const row = item.querySelectorAll("td");

        if (!row) return null;

        return {
          site: this.site,
          category: this.category,
          site_id: this.site_id,
          title: row[1].querySelector("a").innerText.trim(),
          url: row[1].querySelector("a").href.trim(),
          date: row[2].innerText.trim(),
        };
      })
      .filter(Boolean);
  },
  getContentsHtml() {
    return document.querySelector(this.noticeContentsSelector).outerHTML;
  },
};

export default script;
