var gdjs;(function(r){class f{constructor(){this._links=new Map}static getManager(e){return e.linkedObjectsManager||(e.linkedObjectsManager=new r.LinksManager),e.linkedObjectsManager}_getMapOfObjectsLinkedWith(e){return this._links.has(e.id)||this._links.set(e.id,new k),this._links.get(e.id).linkedObjectMap}getObjectsLinkedWith(e){return this._links.has(e.id)||this._links.set(e.id,new k),this._links.get(e.id)}getObjectsLinkedWithAndNamed(e,t){let n=this._getMapOfObjectsLinkedWith(e).get(t);return n||(n=r.staticArray(f.prototype.getObjectsLinkedWithAndNamed)),n}linkObjects(e,t){const n=this._getMapOfObjectsLinkedWith(e);n.has(t.getName())||n.set(t.getName(),[]);const i=n.get(t.getName());i.indexOf(t)===-1&&i.push(t);const c=this._getMapOfObjectsLinkedWith(t);c.has(e.getName())||c.set(e.getName(),[]);const g=c.get(e.getName());g.indexOf(e)===-1&&g.push(e)}removeAllLinksOf(e){const t=this._links.get(e.id);if(!!t){for(const n of t.linkedObjectMap.values())for(let i=0;i<n.length;i++){const c=n[i];if(this._links.has(c.id)){const g=this._links.get(c.id).linkedObjectMap.get(e.getName()),a=g.indexOf(e);a!==-1&&g.splice(a,1)}}this._links.delete(e.id)}}removeLinkBetween(e,t){if(this._links.has(e.id)){const n=this._links.get(e.id).linkedObjectMap;if(n.has(t.getName())){const i=n.get(t.getName()),c=i.indexOf(t);c!==-1&&i.splice(c,1)}}if(this._links.has(t.id)){const n=this._links.get(t.id).linkedObjectMap;if(n.has(e.getName())){const i=n.get(e.getName()),c=i.indexOf(e);c!==-1&&i.splice(c,1)}}}}r.LinksManager=f;const h=class{constructor(){this.linkedObjectMap=new Map}[Symbol.iterator](){let e=this.linkedObjectMap.values(),t=h.emptyItr;return{next:()=>{let n=t.next();for(;n.done;){const i=e.next();if(i.done)return n;t=i.value[Symbol.iterator](),n=t.next()}return n}}}};let k=h;k.emptyItr={next:()=>({value:void 0,done:!0})};let R;(function(e){let x;(function(g){r.registerObjectDeletedFromSceneCallback(function(a,s){f.getManager(a).removeAllLinksOf(s)}),g.linkObjects=function(a,s,O){s===null||O===null||f.getManager(a).linkObjects(s,O)},g.removeLinkBetween=function(a,s,O){s===null||O===null||f.getManager(a).removeLinkBetween(s,O)},g.removeAllLinksOf=function(a,s){s!==null&&f.getManager(a).removeAllLinksOf(s)},g.pickObjectsLinkedTo=function(a,s,O,L){if(O===null)return!1;const j=f.getManager(a)._getMapOfObjectsLinkedWith(O);let m=!1;for(const p in s.items)if(s.containsKey(p)){const d=s.items[p];if(d.length===0)continue;const u=r.staticArray2(r.evtTools.linkedObjects.pickObjectsLinkedTo);if(u.length=0,L)for(const l of d)u.indexOf(l.getName())<0&&u.push(l.getName());else u.push(p);let b=0;for(const l of u)b+=a.getObjects(l).length;if(d.length===b){d.length=0;for(const l of u)if(j.has(l)){const o=j.get(l);m=m||o.length>0,d.push.apply(d,o)}}else{const l=r.staticArray(r.evtTools.linkedObjects.pickObjectsLinkedTo);l.length=0;for(const o of u)if(j.has(o)){const N=j.get(o);for(const M of N)d.indexOf(M)>=0&&l.push(M)}m=m||l.length>0,d.length=0,d.push.apply(d,l),l.length=0}u.length=0}return m}})(x=e.linkedObjects||(e.linkedObjects={}))})(R=r.evtTools||(r.evtTools={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=linkedobjects.js.map